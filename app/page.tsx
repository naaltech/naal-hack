import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, MapPin, Users, Trophy, Clock, Code, Lightbulb, Zap } from "lucide-react"
import { SiInstagram, SiDiscord, SiX, SiLinkedin } from "react-icons/si"
import EventMap from "@/components/EventMap"
import EventEndedModal from "@/components/EventEndedModal"

const faqData = [
  {
    id: "1",
    question: "Hackathon nedir?",
    answer: "Hackathon, temel olarak, organizatörler tarafından belirlenen bir konuyla ilgili olarak kısıtlı bir süre içinde ürün geliştirdiğimiz bir yarışma formatıdır. İki gün sürecek olan hackathon etkinliğimize katılacak ve atölyelere katılma fırsatı bulacak, alanında uzman kişilerle tanışacaksınız."
  },
  {
    id: "2",
    question: "Etkinlik nerede gerçekleştirilecek?",
    answer: "Etkinliğimiz, 27-28 Nisan tarihlerinde Üsküdar Belediyesi'ne bağlı Girişimcilik ve İnovasyon Merkezi olan Atölye Üsküdar'da gerçekleştirilecektir. Ancak, ödül dağıtımı 3 Mayıs Cuma günü Nevzat Ayaz Anadolu Lisesi Konferans Salonu'nda yapılacaktır."
  },
  {
    id: "3",
    question: "Katılım ücreti var mı?",
    answer: "Hayır, etkinliğimiz tamamen ücretsiz olacaktır. Tek yapmanız gereken kayıt olmaktır."
  },
  {
    id: "4",
    question: "Davranış kuralları var mı?",
    answer: "Evet, Major League Hacking Davranış Kuralları'na uyuyoruz."
  },
  {
    id: "5",
    question: "Kimler katılabilir?",
    answer: "Türkiye'de örgün eğitimine devam eden 9-12. sınıf veya hazırlık okuyan lise öğrencileri ile 15-18 yaş aralığındaki açık lise öğrencileri katılabilir."
  },
  {
    id: "6",
    question: "Bir donanım laboratuvarınız olacak mı?",
    answer: " Evet! Naal'Hack sadece yazılım odaklı olmayacak, bu nedenle katılımcılarımıza AtölyeÜsküdar bünyesinde bulunan FAB-LAB'i kullanma imkanı sağlanacaktır. Ancak, ürününüzü geliştirmek için gereken yan ürünleri (Arduino, Led Ekran vb.) kendiniz temin etmeniz gerekecektir."
  },
  {
    id: "7",
    question: "Seyahat masraflarını karşılayacak mısınız?",
    answer: "Maalesef, Naal'Hack katılımcıları için herhangi bir seyahat geri ödemesi yapılmayacaktır."
  },
  {
    id: "8",
    question: "Bir takıma ihtiyacım var mı?",
    answer: "Hayır, böyle bir zorunluluk bulunmuyor. İsterseniz takımınızı oluşturup katılabilir veya yarışma başlamadan önce yeni arkadaşlar edinip bir takım kurabilirsiniz! "
  },
  {
    id: "9",
    question: "Ücretsiz yiyecek, içecek ve kahve olacak mı?",
    answer: "Elbette, yemek ve içecek molaları olacaktır. Ayrıca sınırsız kahve ve atıştırmalıklar da sağlayacağız."
  },
  {
    id: "10",
    question: "Yanımda ne getirmeliyim?",
    answer: "Öğrenci olduğunuzu gösteren bir belge, bilgisayar, şarj aleti ve projenizi yapmak için ihtiyacınız olan her şey."
  },
  {
    id: "11",
    question: "Gece konaklama olacak mı?",
    answer: "Maalesef, Atölye Üsküdar'ın alan anlaşmalarından dolayı gece konaklaması yapılamayacak, yani katılımcılarımızın 1. gün sonunda eve gidip 2. gün sabahında tekrar alana dönmesi gerekecek. Ancak gece konaklamasını mümkün kılmak için elimizden geleni yapıyoruz."
  },
  {
    id: "12",
    question: "Yarışmada ne yapabilirim?",
    answer: "Her şey mümkün! Bir web sitesi tasarlayabilir, mobil uygulama geliştirebilir, programlanabilir bir devre kartı üretebilirsiniz. Kısacası, ne yapacağınız tamamen hayal gücünüze bağlı! Jüriler, projeleri yaratıcılık, teknik beceri ve sağladığı fayda açısından değerlendirecektir. "
  },
  {
    id: "13",
    question: "Takımlarda kişi sınırı var mı?",
    answer: "Takımlar maksimum 4 kişi ile sınırlı olacaktır."
  },
  {
    id: "14",
    question: "Programlamada yeni isem ne olacak?",
    answer: "Programlamada yeni başlayanlar katılabilir. Bu konuda bir sınırlamamız bulunmuyor. Etkinliğimizin ilk günü seminerler olacak."
  },
  {
    id: "15",
    question: "Yapacağım projede kısıtlamalar nedir?",
    answer: "Geliştidiğniz proje yasadışı olmamalı, MLH Davranış Kuralları'na uygun olmalı, etkinlik alanını ve katılımcıları tehlikeye atmamalıdır."
  },
]

export default function HackathonPage() {
  return (
    <div className="min-h-screen bg-background">
      <EventEndedModal />
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">naalhack</div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Hakkında
              </a>
              <a href="#program" className="text-muted-foreground hover:text-primary transition-colors">
                Program
              </a>
              <a href="#kayit" className="text-muted-foreground hover:text-primary transition-colors">
                Kayıt
              </a>
              <a href="#sponsorlar" className="text-muted-foreground hover:text-primary transition-colors">
                Sponsorlar
              </a>
              <a href="#sss" className="text-muted-foreground hover:text-primary transition-colors">
                SSS
              </a>
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
                <span>27-28 Nisan 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Atölye Üsküdar</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button data-tally-open="mZaeAV" size="lg" className="bg-primary hover:bg-primary/90">
                Kayıt Ol
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <a href="mailto:hack@naal.org.tr">
                  Sponsor Ol
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://discord.gg/7pS5NsAPWV" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://naal-hack.devpost.com" target="_blank" rel="noopener noreferrer">
                  Devpost
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Etkinlik Hakkında</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
               Kafein dolu, uykusuz 48 saat boyunca İstanbul'un dört bir yanından gelen öğrenciler, inanılmaz ödüller kazanma şansı için beyin fırtınası yapacak, hayal edebilecekleri her şeyi inşa edecek, test edecek ve sunacaklar.
               <br/>
               Ayrıca, profesyonel mentorlar ve mühendislerle etkileşim kurmak ve onlarla tanışmak için bolca zamanınız olacak. İşe alım uzmanları ve sponsorların harika teknoloji konuşmalarını ve eğitimlerini dinleyebileceksiniz. 
            </p>
          </div>
        </div>
      </section>

      {/* Event Area Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Etkinlik Alanı</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Atölye Üsküdar, girişimcilere ve yarışmalara katılmak isteyenlere eğitim, ekipman, sarf malzeme ve mentorluk desteği sunan bir ekosistemdir. Üsküdar Belediyesi ve İSTKA desteğiyle kurulan merkez, Ar-Ge, yenilik ve girişimcilik kültürünü yaygınlaştırmayı hedeflemektedir.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>200+ Katılımcı</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Yüksek Hızlı İnternet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>Modern Ekipmanlar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span>Yaratıcı Alanlar</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Etkinlik Programı</h2>
            <h3 className="text-2xl md:text-2xl font-light text-primary text-center mb-12">TBD</h3>
            {/* <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    15 Mart - Cuma
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>18:00 - Kayıt ve Karşılama</span>
                    <Badge>Başlangıç</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>19:00 - Açılış Konuşması</span>
                    <Badge variant="outline">Konuşma</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>20:00 - Takım Oluşturma</span>
                    <Badge variant="secondary">Networking</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>21:00 - Hackathon Başlangıcı</span>
                    <Badge className="bg-primary">Kodlama</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    16 Mart - Cumartesi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>09:00 - Kahvaltı</span>
                    <Badge variant="outline">Yemek</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>10:00 - Mentor Seansları</span>
                    <Badge variant="secondary">Mentorluk</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>13:00 - Öğle Yemeği</span>
                    <Badge variant="outline">Yemek</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>14:00 - Workshop: AI & ML</span>
                    <Badge>Workshop</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>19:00 - Akşam Yemeği</span>
                    <Badge variant="outline">Yemek</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="kayit" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Kayıt Ol</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Türkiye'nin en büyük hackathon etkinliğine katılmak için hemen kayıt olun ve geleceğin teknolojilerini
              şekillendirme fırsatını kaçırmayın!
            </p>
            <Button data-tally-open="mZaeAV" size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              Hemen Kayıt Ol
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsorlar" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Sponsorlarımız</h2>
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

            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12">İşbirlikleri</h3>
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
                Etkinliğimize sponsor olmak ve teknoloji topluluğuyla buluşmak ister misiniz?
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <a href="mailto:hack@naal.org.tr">
                  Sponsor Ol
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Sıkça Sorulan Sorular</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-card rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Bizi Takip Edin</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Güncel duyurular ve etkinlik haberleri için sosyal medya hesaplarımızı takip edin!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://instagram.com/naalhack" target="_blank" rel="noopener noreferrer">
                  <SiInstagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://discord.gg/7pS5NsAPWV/" target="_blank" rel="noopener noreferrer">
                  <SiDiscord className="w-5 h-5" />
                  Discord
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://x.com/naalteknoloji/" target="_blank" rel="noopener noreferrer">
                  <SiX className="w-5 h-5" />
                  Twitter
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <a href="https://www.linkedin.com/company/naaltech/" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="w-5 h-5" />
                  LinkedIn
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
            <p>&copy; {new Date().getFullYear()} Nevzat Ayaz Anadolu Lisesi Hackathon Turnuvası. | Bu proje <a href="https://raw.githubusercontent.com/naaltech/naal-hack/refs/heads/main/LICENSE">GPLv3</a> ile lisanslanmıştır.</p>
            <p>Açık Kaynak: <a href="https://github.com/naaltech/naal-hack">GitHub</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
