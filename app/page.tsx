'use client'

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Trophy, Clock, Code, Lightbulb, Zap } from "lucide-react"
import { SiInstagram, SiDiscord, SiX, SiLinkedin } from "react-icons/si"
import EventMap from "@/components/EventMap"
import EventEndedModal from "@/components/EventEndedModal"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useLanguage } from "@/contexts/LanguageContext"

// FAQ data will be loaded dynamically from translations

export default function HackathonPage() {
  const { t, isLoading } = useLanguage()
  
  // Show loading state while translations are being loaded
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-background">
      <EventEndedModal />
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">naalhack</div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#program" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.program')}
              </a>
              <a href="#kayit" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.register')}
              </a>
              <a href="#sponsorlar" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.sponsors')}
              </a>
              <a href="#sss" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.faq')}
              </a>
              <LanguageSwitcher />
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-center">
              <img 
                src="/logo_text.png" 
                alt="naalhack logo" 
                className="h-24 md:h-32 lg:h-40 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 text-base sm:text-lg text-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{t('hero.date')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{t('hero.location')}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button data-tally-open="mZaeAV" size="lg" className="bg-primary hover:bg-primary/90">
                {t('hero.register')}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <a href="mailto:hack@naal.org.tr">
                  {t('hero.sponsor')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://discord.gg/7pS5NsAPWV" target="_blank" rel="noopener noreferrer">
                  {t('hero.discord')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://naal-hack.devpost.com" target="_blank" rel="noopener noreferrer">
                  {t('hero.devpost')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
               {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Event Area Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t('eventArea.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('eventArea.description')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{t('eventArea.features.participants')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>{t('eventArea.features.internet')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>{t('eventArea.features.equipment')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span>{t('eventArea.features.creative')}</span>
                  </div>
                </div>
              </div>
              <div>
                <EventMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t('program.title')}</h2>
            <h3 className="text-2xl md:text-2xl font-light text-primary text-center mb-12">{t('program.tbd')}</h3>
            
            {/* Program Schedule - Coming Soon */}
            {/* 
            <div className="space-y-6">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {t('program.schedule.day1.title')}
                </h3>
                <div className="space-y-3">
                  {(() => {
                    const events = t('program.schedule.day1.events')
                    if (Array.isArray(events)) {
                      return events.map((event: any, index: number) => (
                        <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-border/50 last:border-b-0 gap-2">
                          <span className="text-muted-foreground text-sm sm:text-base">{event.time} - {event.activity}</span>
                          <Badge 
                            variant={event.type === 'Başlangıcı' || event.type === 'Start' ? 'default' : 
                                    event.type === 'Konuşma' || event.type === 'Speech' ? 'outline' : 
                                    event.type === 'Networking' ? 'secondary' : 
                                    event.type === 'Kodlama' || event.type === 'Coding' ? 'default' : 
                                    event.type === 'Yemek' || event.type === 'Food' ? 'outline' : 
                                    event.type === 'Mentorluk' || event.type === 'Mentoring' ? 'secondary' : 
                                    event.type === 'Workshop' ? 'default' : 'outline'}
                            className="whitespace-nowrap"
                          >
                            {event.type}
                          </Badge>
                        </div>
                      ))
                    }
                    return null
                  })()}
                </div>
              </div>

              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {t('program.schedule.day2.title')}
                </h3>
                <div className="space-y-3">
                  {(() => {
                    const events = t('program.schedule.day2.events')
                    if (Array.isArray(events)) {
                      return events.map((event: any, index: number) => (
                        <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-border/50 last:border-b-0 gap-2">
                          <span className="text-muted:foreground text-sm sm:text-base">{event.time} - {event.activity}</span>
                          <Badge 
                            variant={event.type === 'Başlangıcı' || event.type === 'Start' ? 'default' : 
                                    event.type === 'Konuşma' || event.type === 'Speech' ? 'outline' : 
                                    event.type === 'Yemek' || event.type === 'Food' ? 'outline' : 
                                    event.type === 'Mentorluk' || event.type === 'Mentoring' ? 'secondary' : 
                                    event.type === 'Workshop' ? 'default' : 'outline'}
                            className="whitespace-nowrap"
                          >
                            {event.type}
                          </Badge>
                        </div>
                      ))
                    }
                    return null
                  })()}
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="kayit" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('registration.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('registration.description')}
            </p>
            <Button data-tally-open="mZaeAV" size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              {t('registration.button')}
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsorlar" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{t('sponsors.title')}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-2 border">
                <img 
                  src="https://static.mlh.io/brand-assets/sponsors/github/github-logo.svg" 
                  alt="GitHub" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-2 border">
                <img 
                  src="https://static.mlh.io/brand-assets/sponsors/stand-out-stickers/stand-out-stickers-logo.png" 
                  alt="Stand Out Stickers" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12">{t('sponsors.partnerships')}</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-2 border">
                <img 
                  src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png" 
                  alt="MLH" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-2 border">
                <img 
                  src="https://hcb.hackclub.com/brand/hcb-icon-icon-original.png" 
                  alt="Hack Club Bank" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center p-2 border">
                <img 
                  src="/atolyeuskudar.png" 
                  alt="Atölye Üsküdar" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                {t('sponsors.sponsorText')}
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <a href="mailto:hack@naal.org.tr">
                  {t('sponsors.sponsorButton')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t('faq.title')}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {(() => {
                const questions = t('faq.questions')
                if (Array.isArray(questions)) {
                  return questions.map((faq: any, index: number) => (
                    <AccordionItem key={index} value={index.toString()} className="bg-card rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }
                return null
              })()}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t('social.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('social.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://instagram.com/naalhack" target="_blank" rel="noopener noreferrer">
                  <SiInstagram className="w-5 h-5" />
                  {t('social.instagram')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://discord.gg/7pS5NsAPWV/" target="_blank" rel="noopener noreferrer">
                  <SiDiscord className="w-5 h-5" />
                  {t('social.discord')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://x.com/naalteknoloji/" target="_blank" rel="noopener noreferrer">
                  <SiX className="w-5 h-5" />
                  {t('social.twitter')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://www.linkedin.com/company/naaltech/" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="w-5 h-5" />
                  {t('social.linkedin')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Nevzat Ayaz Anadolu Lisesi Hackathon Turnuvası. | {t('footer.copyright')}</p>
            <p>{t('footer.opensource')}: <a href="https://github.com/naaltech/naal-hack">GitHub</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
