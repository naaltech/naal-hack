"use client"

import * as React from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"

const DialogContext = React.createContext<{
  titleId: string
  descriptionId: string
  close: () => void
} | null>(null)

function useDialog() {
  const context = React.useContext(DialogContext)

  if (!context) {
    throw new Error("Dialog parts must be used within a Dialog")
  }

  return context
}

function Dialog({
  open = false,
  onOpenChange,
  children,
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}) {
  const id = React.useId()

  const context = React.useMemo(
    () => ({
      titleId: `${id}-title`,
      descriptionId: `${id}-description`,
      close: () => onOpenChange?.(false),
    }),
    [id, onOpenChange]
  )

  if (!open) {
    return null
  }

  return (
    <DialogContext.Provider value={context}>{children}</DialogContext.Provider>
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<"dialog"> & {
  showCloseButton?: boolean
}) {
  const { titleId, descriptionId, close } = useDialog()
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    const dialog = dialogRef.current

    if (dialog && !dialog.open) {
      dialog.showModal()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      data-slot="dialog-content"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={close}
      onClick={(event) => {
        // The inner wrapper fills the dialog, so only ::backdrop clicks land here
        if (event.target === event.currentTarget) {
          close()
        }
      }}
      className={cn(
        "bg-background text-foreground animate-in fade-in-0 zoom-in-95 backdrop:animate-in backdrop:fade-in-0 m-auto w-full max-w-[calc(100%-2rem)] rounded-lg border shadow-lg duration-200 backdrop:bg-black/50 sm:max-w-lg",
        className
      )}
      {...props}
    >
      <div className="relative grid gap-4 p-6">
        {children}
        {showCloseButton && (
          <button
            type="button"
            data-slot="dialog-close"
            onClick={close}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XMarkIcon />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    </dialog>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<"h2">) {
  const { titleId } = useDialog()

  return (
    <h2
      id={titleId}
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { descriptionId } = useDialog()

  return (
    <div
      id={descriptionId}
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
}
