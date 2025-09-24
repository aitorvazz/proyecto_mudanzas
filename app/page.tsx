"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Home, Package, Shield, Clock, MapPin, Phone, Mail, MessageCircle, X } from "lucide-react"

export default function HomePage() {
  const [showContactModal, setShowContactModal] = useState(false)

  const handleContactClick = () => {
    setShowContactModal(true)
  }

  const handleCallClick = () => {
    window.location.href = "tel:+34648762308"
    setShowContactModal(false)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/34648762308?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto%20gratuito%20para%20mudanza",
      "_blank",
    )
    setShowContactModal(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold mb-6 text-center">¿Cómo prefieres contactar?</h3>
            <div className="space-y-3">
              <button
                onClick={handleCallClick}
                className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar ahora</span>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">mudanzasbilbao.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </a>
              <a href="#ubicaciones" className="text-muted-foreground hover:text-foreground transition-colors">
                Ubicaciones
              </a>
              <a href="#nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/guggenheim-museum-bilbao-exterior-architecture-mod.jpg')",
            backgroundPosition: "center 30%",
          }}
        ></div>
        <div className="absolute inset-0 bg-background/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Empresa líder en mudanzas y transportes
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 text-white drop-shadow-lg">
              Mudanzas Bilbao | <span className="text-accent">Transportes País Vasco</span>
            </h1>
            <p className="text-xl text-white/90 text-pretty mb-8 max-w-2xl mx-auto drop-shadow-md">
              Empresa líder en mudanzas, transportes, portes y vaciados en Bilbao, País Vasco y toda España. Servicio
              profesional 24h con más de 25 años de experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white rounded-full"
                onClick={handleContactClick}
              >
                Presupuesto gratuito
              </Button>
              <a href="#servicios">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full"
                >
                  Ver servicios
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Servicios de Mudanzas, Transportes y Vaciados en Bilbao
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servicios completos de mudanzas, transportes, portes y vaciados en todo el País Vasco y España
            </p>
          </div>

          <div className="mb-12 text-center">
            <img
              src="/professional-moving-truck-with-workers-loading-box.jpg"
              alt="Empresa mudanzas Bilbao - Camión profesional transportes País Vasco"
              className="mx-auto rounded-lg shadow-lg w-full max-w-4xl h-64 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Home className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mudanzas Residenciales Bilbao</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mudanzas de viviendas en Bilbao, Getxo, Barakaldo y todo el País Vasco con embalaje profesional y máxima
                seguridad.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Package className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mudanzas Comerciales País Vasco</h3>
              <p className="text-muted-foreground leading-relaxed">
                Traslados de oficinas y empresas en Vizcaya, Guipúzcoa y Álava con mínima interrupción de la actividad
                comercial.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Truck className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transportes y Portes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Servicios de transportes y portes desde Bilbao a toda España y Europa con gestión completa de
                documentación.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Embalaje Profesional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Materiales de alta calidad y técnicas especializadas para proteger tus objetos más valiosos durante el
                transporte.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Clock className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Almacenaje Temporal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instalaciones seguras y climatizadas en Bilbao para guardar tus pertenencias el tiempo que necesites.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Package className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Vaciados Bilbao y Vizcaya</h3>
              <p className="text-muted-foreground leading-relaxed">
                Servicio completo de vaciados de viviendas, oficinas y locales en Bilbao y alrededores con gestión de
                residuos incluida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="ubicaciones" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mudanzas y Transportes en Todo el País Vasco</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Servicios de mudanzas, transportes y vaciados en Bilbao, Vizcaya, Guipúzcoa, Álava y toda España
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mudanzas Bilbao y Gran Bilbao</h3>
                    <p className="text-muted-foreground">
                      Servicio completo de mudanzas y transportes en Bilbao, Getxo, Barakaldo, Santurtzi, Portugalete,
                      Sestao, Basauri y toda la zona metropolitana de Bilbao.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transportes País Vasco</h3>
                    <p className="text-muted-foreground">
                      Cobertura completa en Vizcaya, Guipúzcoa y Álava. Mudanzas en San Sebastián, Vitoria-Gasteiz,
                      Durango, Gernika y todas las localidades del País Vasco.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mudanzas Nacional e Internacional</h3>
                    <p className="text-muted-foreground">
                      Mudanzas y transportes desde Bilbao a toda España, Europa y el resto del mundo con la máxima
                      garantía y profesionalidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/professional-movers-carrying-furniture-and-boxes-i.jpg"
                alt="Equipo profesional mudanzas Bilbao - Transportes País Vasco"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Más de 15 años de experiencia nos avalan como la empresa de mudanzas de confianza en Bilbao
            </p>

            <div className="mb-12">
              <img
                src="/moving-team-uniforms.jpg"
                alt="Equipo profesional de mudanzas"
                className="mx-auto rounded-lg shadow-lg w-full max-w-4xl h-72 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15000+</div>
                <div className="text-muted-foreground">Mudanzas realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground">Clientes satisfechos</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">Profesionalidad garantizada</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo está formado por profesionales cualificados con amplia experiencia en el sector de las
                  mudanzas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Seguro de responsabilidad civil</h3>
                <p className="text-muted-foreground">
                  Todas nuestras mudanzas están cubiertas por un seguro de responsabilidad civil para tu total
                  tranquilidad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Presupuesto sin compromiso</h3>
                <p className="text-muted-foreground">
                  Ofrecemos presupuestos detallados y transparentes, sin costes ocultos ni sorpresas de última hora.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Atención personalizada</h3>
                <p className="text-muted-foreground">
                  Cada mudanza es única. Adaptamos nuestros servicios a tus necesidades específicas y horarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contacta con nosotros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solicita tu presupuesto gratuito y sin compromiso. Te respondemos en menos de 24 horas.
            </p>
          </div>

          <div className="mb-12 text-center">
            <img
              src="/moving-consultation.jpg"
              alt="Consulta personalizada de mudanzas"
              className="mx-auto rounded-lg shadow-lg w-full max-w-3xl h-64 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={handleContactClick}>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-muted-foreground mb-4">Servicio 24h de lunes a domingo 365 días al año</p>
                <span className="text-accent hover:underline font-medium">648 762 308</span>
              </CardContent>
            </Card>

            <a
              href="mailto:bilbaomudanzas1@gmail.com?subject=Consulta%20sobre%20mudanzas&body=Hola,%20me%20gustaría%20recibir%20información%20sobre%20sus%20servicios%20de%20mudanzas."
              className="block"
            >
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">Escríbenos tu consulta</p>
                  <span className="text-accent hover:underline font-medium">bilbaomudanzas1@gmail.com</span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-6 w-6" />
                <span className="font-bold">mudanzasbilbao.com</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Tu empresa de confianza para mudanzas, transportes, portes y vaciados en Bilbao, el País Vasco y por
                toda España.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Mudanzas residenciales</li>
                <li>Mudanzas comerciales</li>
                <li>Transportes y portes</li>
                <li>Vaciados</li>
                <li>Embalaje profesional</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Pueblos y ciudades</h4>
              <ul className="space-y-1 text-xs text-primary-foreground/80">
                <li>Getxo, Portugalete, Santurtzi</li>
                <li>Barakaldo, Sestao, Basauri</li>
                <li>Galdakao, Arrigorriaga, Zaratamo</li>
                <li>Erandio, Leioa, Berango</li>
                <li>Sopelana, Urduliz, Gorliz</li>
                <li>Mungia, Bakio, Bermeo</li>
                <li>Gernika, Durango, Amorebieta</li>
                <li>Balmaseda, Ortuella, Abanto</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>648 762 308</li>
                <li>bilbaomudanzas1@gmail.com</li>
                <li>Servicio a domicilio</li>
                <li>Toda Vizcaya</li>
                <li>Toda España</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 mudanzasbilbao.com. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/34648762308?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20de%20mudanzas"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
