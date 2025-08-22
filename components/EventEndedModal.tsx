'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { SiInstagram } from "react-icons/si"

export default function EventEndedModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal when component mounts (page loads)
    setIsOpen(true)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg md:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-primary">
            🎉 Etkinlik Sona Erdi!
          </DialogTitle>
          <DialogDescription className="text-center space-y-3 pt-3">
            <p className="text-sm leading-relaxed">
              Naal'Hack 2024'ü başarıyla tamamladık. Bu süreçte bizimle olan organizasyon ekibindeki arkadaşlarımıza, iki gün boyunca Gebze'den Bağcılar'a katılım sağlayan katılımcılarımıza teşekkür ederiz.
İstanbul'da ve Türkiye'de ilk kez liseler arası hackathon yarışması düzenlemiş olduk. Hack Club etkinliğimize maddi desteğiyle katkı sağladı. Katılımcılarımızdan ücret talep etmeden ve okulumuzun bütçesinden hiç para harcamadan bu etkinliği gerçekleştirdik.<br/><br/>
Özeleştirilerimizi yaparak, gelecekte benzer etkinliklerde daha iyi bir organizasyon sunmak için çalışmalarımıza devam edeceğiz. 
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
              Instagram Postunu Gör
            </a>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            Kapat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
