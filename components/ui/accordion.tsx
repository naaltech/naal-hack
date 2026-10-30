"use client"

import * as React from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
  openValue: string | null
  toggle: (value: string) => void
} | null>(null)

const AccordionItemContext = React.createContext<{
  value: string
  triggerId: string
  contentId: string
} | null>(null)

function useAccordionItem() {
  const accordion = React.useContext(AccordionContext)
  const item = React.useContext(AccordionItemContext)

  if (!accordion || !item) {
    throw new Error("Accordion parts must be used within an AccordionItem")
  }

  return { ...item, ...accordion, open: accordion.openValue === item.value }
}

function Accordion({ ...props }: React.ComponentProps<"div">) {
  const [openValue, setOpenValue] = React.useState<string | null>(null)

  const context = React.useMemo(
    () => ({
      openValue,
      toggle: (value: string) =>
        setOpenValue((current) => (current === value ? null : value)),
    }),
    [openValue]
  )

  return (
    <AccordionContext.Provider value={context}>
      <div data-slot="accordion" {...props} />
    </AccordionContext.Provider>
  )
}

function AccordionItem({
  className,
  value,
  ...props
}: React.ComponentProps<"div"> & { value: string }) {
  const id = React.useId()

  const context = React.useMemo(
    () => ({
      value,
      triggerId: `${id}-trigger`,
      contentId: `${id}-content`,
    }),
    [id, value]
  )

  return (
    <AccordionItemContext.Provider value={context}>
      <div
        data-slot="accordion-item"
        className={cn("border-b last:border-b-0", className)}
        {...props}
      />
    </AccordionItemContext.Provider>
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const { value, triggerId, contentId, open, toggle } = useAccordionItem()

  return (
    <h3 className="flex">
      <button
        type="button"
        id={triggerId}
        data-slot="accordion-trigger"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => toggle(value)}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-expanded:[&>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </button>
    </h3>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { triggerId, contentId, open } = useAccordionItem()

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      data-slot="accordion-content"
      className={cn(
        "grid text-sm transition-[grid-template-rows,visibility] duration-200",
        open ? "grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
      )}
      {...props}
    >
      <div className="min-h-0 overflow-hidden">
        <div className={cn("pt-0 pb-4", className)}>{children}</div>
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
