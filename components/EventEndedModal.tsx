'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { SiInstagram } from "react-icons/si"
import { useLanguage } from "@/contexts/LanguageContext"

export default function EventEndedModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Show modal when component mounts (page loads)
    setIsOpen(true)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg md:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-primary">
            {t('eventEndedModal.title')}
          </DialogTitle>
          <DialogDescription className="text-center space-y-3 pt-3">
            <p className="text-sm leading-relaxed">
              {t('eventEndedModal.description')}<br/><br/>
              {t('eventEndedModal.description2')}
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <a 
              href="https://www.instagram.com/p/C6mnxt4tUeN/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <SiInstagram className="w-5 h-5" />
              {t('eventEndedModal.instagramButton')}
            </a>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            {t('eventEndedModal.closeButton')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
