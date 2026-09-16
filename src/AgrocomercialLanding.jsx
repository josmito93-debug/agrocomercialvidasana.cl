import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ShieldCheck,
  Truck,
  Sprout,
  BarChart3,
  Globe,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Sparkles,
  Layers,
  Leaf,
  Sun,
  Flame,
  Wheat,
  Search,
  Users
} from 'lucide-react';

// Variantes de animación con Framer Motion (Física de fluidos y escalonamiento)
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function AgrocomercialLanding() {
  const [activeTab, setActiveTab] = useState('nosotros');

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#141514] font-sans antialiased selection:bg-[#E5C158] selection:text-[#141514]">
      {/* =========================================================================
          1. NAVEGACIÓN FLOTANTE (Pill Nav Minimalista)
          ========================================================================= */}
      <header className="sticky top-5 z-50 px-4 max-w-6xl mx-auto">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/85 backdrop-blur-xl border border-black/5 rounded-full px-5 py-2.5 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] flex items-center justify-between"
        >
          {/* Logo & Marca */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#E5C158] flex items-center justify-center text-[#141514] font-bold text-sm shadow-sm group-hover:rotate-12 transition-transform duration-300">
              <Sprout className="w-4 h-4 text-[#141514]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight text-[#141514] leading-tight">
                Vida Sana
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#666B62]">
                Agrocomercial
              </span>
            </div>
          </a>

          {/* Menú Centralizado */}
          <div className="hidden md:flex items-center gap-1 text-xs font-medium text-[#4E544A]">
            <button
              onClick={() => setActiveTab('nosotros')}
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === 'nosotros'
                  ? 'bg-[#141514] text-white shadow-sm'
                  : 'hover:text-[#141514] hover:bg-black/5'
              }`}
            >
              Sobre la Empresa
            </button>
            <a
              href="#catalogo"
              className="px-3.5 py-1.5 rounded-full hover:text-[#141514] hover:bg-black/5 transition-colors"
            >
              Catálogo Mayorista
            </a>
            <a
              href="#red-logistica"
              className="px-3.5 py-1.5 rounded-full hover:text-[#141514] hover:bg-black/5 transition-colors"
            >
              Red Logística
            </a>
            <a
              href="#estandares"
              className="px-3.5 py-1.5 rounded-full hover:text-[#141514] hover:bg-black/5 transition-colors"
            >
              Estándares
            </a>
            <a
              href="#contacto"
              className="px-3.5 py-1.5 rounded-full hover:text-[#141514] hover:bg-black/5 transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* CTA & Idioma */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-semibold text-[#535A4F]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Chile · RM</span>
            </div>
            <a
              href="#contacto"
              className="group bg-[#141514] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Cotizar</span>
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </span>
            </a>
          </div>
        </motion.nav>
      </header>

      {/* =========================================================================
          2. HERO SECTION DINÁMICO (Bento Asimétrico + Tipografía Oversized)
          ========================================================================= */}
      <section className="pt-10 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Titular y Métricas (7 Cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col justify-between pt-4"
          >
            <div>
              {/* Eyebrow Badge */}
              <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 mb-5">
                <span className="px-3.5 py-1 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/40 text-[#8C6B16] text-[10px] uppercase font-bold tracking-[0.2em]">
                  Líderes en Abastecimiento Agroindustrial
                </span>
              </motion.div>

              {/* Titular Oversized */}
              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="text-4xl sm:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-[#141514] leading-[1.05] mb-6"
              >
                Agrocomercial Vida Sana: uno de los mayores productores y distribuidores agrícolas
              </motion.h1>

              {/* Copy Persuasivo B2B */}
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="text-base sm:text-lg text-[#555C51] leading-relaxed max-w-[58ch] mb-8 font-normal"
              >
                Abastecemos de forma continua a hoteles, casinos corporativos, cadenas de supermercados y centrales de compra en la zona central de Chile. Selección certificada por calibre, cadena de frío estricta y mallas agrícolas de máxima protección.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap items-center gap-4 mb-14">
                <a
                  href="#contacto"
                  className="group bg-[#141514] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-black active:scale-[0.98] transition-all shadow-md"
                >
                  <span>Solicitar Catálogo Mayorista</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#E5C158] group-hover:text-[#141514] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
                <a
                  href="https://wa.me/56984182060"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full border border-black/10 text-xs font-semibold text-[#141514] hover:bg-black/5 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mesa de Ayuda Comercial</span>
                </a>
              </motion.div>
            </div>

            {/* Fila de Métricas Clave (Pills Blancas) */}
            <motion.div
              variants={fadeInUp}
              custom={4}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-black/10"
            >
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-black/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141514] tracking-tight">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs text-[#6A7165] mt-1 uppercase font-semibold tracking-wider">
                  Calidad de Selección
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-black/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141514] tracking-tight">
                  25+
                </div>
                <div className="text-[10px] sm:text-xs text-[#6A7165] mt-1 uppercase font-semibold tracking-wider">
                  Años de Trayectoria
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-black/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141514] tracking-tight">
                  15.000+
                </div>
                <div className="text-[10px] sm:text-xs text-[#6A7165] mt-1 uppercase font-semibold tracking-wider">
                  Toneladas Anuales
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Tarjeta Fotográfica y Badge Superpuesto (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Contenedor Doble Bezel con Foto de Cultivo de Trigo/Campo */}
            <div className="p-2.5 bg-white rounded-[2.5rem] border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]">
              <div className="relative h-[480px] sm:h-[540px] rounded-[2rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
                  alt="Cultivo agrícola de alta calidad - Agrocomercial Vida Sana"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Badge Flotante Superior: Líder en Cosecha y Mallas */}
                <div className="absolute top-5 right-5 left-5 sm:left-auto sm:w-72 bg-[#171A17]/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 text-white shadow-xl">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="text-xs font-bold leading-snug">
                      Líderes en abastecimiento mayorista y mallas agrícolas en Chile
                    </p>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#A5AEA2] leading-relaxed mb-3">
                    Garantizamos calibre uniforme, trazabilidad de lote y acuerdos de precio fijo por temporada.
                  </p>
                  <div className="h-14 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600&auto=format&fit=crop"
                      alt="Cosecha de hortalizas y frutas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Sello de Autenticidad Inferior */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white/90">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Resolución Sanitaria Vigente</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          3. LÍNEA DE TIEMPO / DESARROLLO (Editorial & Minimalista)
          ========================================================================= */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Izquierda: Mini Thumbnail Circular/Píldora */}
          <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5C158]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#666B62]">
                Vida Sana
              </span>
            </div>
            <div className="w-32 h-20 sm:w-44 sm:h-28 rounded-2xl overflow-hidden border border-black/5 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=500&auto=format&fit=crop"
                alt="Sembradíos agrícolas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Centro: Bloque Editorial de Trayectoria */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#141514] tracking-tight mb-5 leading-snug">
              Nuestra trayectoria: del campo a la vanguardia logística nacional
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#565D52] leading-relaxed">
              <p>
                <strong className="text-[#141514] font-semibold">Fundada con la convicción</strong> de transformar el abastecimiento de perecibles en Chile, Vida Sana nació conectando directamente los valles más fértiles de la zona central con los grandes centros de consumo gastronómico e industrial.
              </p>
              <p>
                Hoy integramos una red agrícola que gestiona <span className="text-[#141514] font-medium">más de 15.000 toneladas anuales</span> de hortalizas, frutas de temporada, aceites profesionales para fritura y mallas Raschel con protección UV, respaldados por una flota propia y estándares rigurosos de inocuidad.
              </p>
            </div>
          </div>

          {/* Derecha: Thumbnail de Cultivo Dorado */}
          <div className="lg:col-span-3 flex justify-end">
            <div className="w-36 h-36 sm:w-48 sm:h-44 rounded-3xl overflow-hidden border border-black/5 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=500&auto=format&fit=crop"
                alt="Cosecha de granos y hortalizas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BLOQUE DE AUTORIDAD (Dark Mode Full-Width Container)
          ========================================================================= */}
      <section id="red-logistica" className="py-8 px-4 max-w-7xl mx-auto">
        <div className="bg-[#121412] text-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 shadow-2xl border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tarjeta Izquierda: Mapa de Distribución y Cobertura (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-[#191D19] rounded-3xl p-6 sm:p-8 border border-white/5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E5C158] text-[10px] uppercase font-bold tracking-widest mb-4">
                  Logística & Despacho
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                  Red de distribución y cobertura en zona central
                </h3>
                <p className="text-xs sm:text-sm text-[#959F91] mb-6">
                  Rutas matutinas programadas con flota frigorizada para asegurar la frescura desde el andén de carga hasta tu bodega.
                </p>

                {/* Representación Visual de Cobertura / Mapa SVG */}
                <div className="bg-[#121412] rounded-2xl p-5 border border-white/5 mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-[#B2BDB0] mb-4">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">
                      Puntos de Despacho Diario
                    </span>
                    <span className="text-[#E5C158] font-mono font-bold">Activos 24/7</span>
                  </div>

                  {/* Barras de Cobertura Regional */}
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium">
                        <span>Región Metropolitana (Santiago Urbano e Industrial)</span>
                        <span className="font-mono text-[#E5C158]">88%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E5C158] rounded-full w-[88%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium">
                        <span>Valparaíso & Costa Central (Canal HORECA)</span>
                        <span className="font-mono text-[#E5C158]">72%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E5C158] rounded-full w-[72%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium">
                        <span>O'Higgins & Maule (Red Agrícola & Mayoristas)</span>
                        <span className="font-mono text-[#E5C158]">64%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E5C158] rounded-full w-[64%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Métricas Inferiores de la Tarjeta Oscura */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">15.000t</div>
                  <div className="text-[9px] uppercase font-semibold text-[#8C9687] mt-0.5">Producción</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">99,4%</div>
                  <div className="text-[9px] uppercase font-semibold text-[#8C9687] mt-0.5">Puntualidad</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">100%</div>
                  <div className="text-[9px] uppercase font-semibold text-[#8C9687] mt-0.5">Trazable</div>
                </div>
              </div>
            </div>

            {/* Tarjeta Derecha: Gráfico de Rendimiento por Categoría (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Card Blanca Interior: Gráfico de Barras y Segmentación */}
              <div className="bg-white text-[#141514] rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-extrabold tracking-tight">
                      Distribución por categoría de producto
                    </h4>
                    <p className="text-xs text-[#6B7266]">
                      Volumen mensual despachado según canal comercial
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#141514] text-white text-[10px] font-mono font-bold">
                    Año 2026
                  </span>
                </div>

                {/* Porcentajes Superiores */}
                <div className="grid grid-cols-3 gap-2 mb-6 text-center border-b border-black/5 pb-4">
                  <div>
                    <div className="text-xs text-[#7A8275] uppercase font-bold text-[10px]">Hortalizas</div>
                    <div className="text-xl font-extrabold text-[#141514]">62%</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#7A8275] uppercase font-bold text-[10px]">Frutas</div>
                    <div className="text-xl font-extrabold text-[#D8A63A]">26%</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#7A8275] uppercase font-bold text-[10px]">Aceites & Mallas</div>
                    <div className="text-xl font-extrabold text-[#385941]">12%</div>
                  </div>
                </div>

                {/* Gráfico de Barras Elegante (12 Meses) */}
                <div className="space-y-2">
                  <div className="flex items-end justify-between h-28 pt-4 px-1 gap-1.5">
                    {[
                      { m: 'Ene', h1: '70%', h2: '20%' },
                      { m: 'Feb', h1: '75%', h2: '18%' },
                      { m: 'Mar', h1: '85%', h2: '25%' },
                      { m: 'Abr', h1: '80%', h2: '28%' },
                      { m: 'May', h1: '90%', h2: '32%' },
                      { m: 'Jun', h1: '88%', h2: '30%' },
                      { m: 'Jul', h1: '92%', h2: '35%' },
                      { m: 'Ago', h1: '85%', h2: '30%' },
                      { m: 'Sep', h1: '95%', h2: '40%' },
                      { m: 'Oct', h1: '100%', h2: '45%' },
                      { m: 'Nov', h1: '90%', h2: '38%' },
                      { m: 'Dic', h1: '96%', h2: '42%' }
                    ].map((bar, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <div className="w-full flex flex-col gap-0.5 items-center justify-end h-full">
                          <div
                            style={{ height: bar.h2 }}
                            className="w-full max-w-[12px] bg-[#D8A63A] rounded-t-sm group-hover:brightness-110 transition-all"
                          />
                          <div
                            style={{ height: bar.h1 }}
                            className="w-full max-w-[12px] bg-[#141514] rounded-t-sm group-hover:bg-[#2F372C] transition-all"
                          />
                        </div>
                        <span className="text-[9px] font-mono text-[#8C9487]">{bar.m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Trigo/Dorado: Alianzas Comerciales & Grandes Cuentas */}
              <div className="bg-[#F2E5C8] text-[#141514] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#141514]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5E553D]">
                      Grandes Cuentas & HORECA
                    </span>
                  </div>
                  <h4 className="text-xl font-extrabold tracking-tight">
                    ¿Requieres suministro garantizado para tu empresa?
                  </h4>
                  <p className="text-xs text-[#524933] max-w-[45ch]">
                    Diseñamos contratos por temporada con precios protegidos y facturación centralizada para casinos, cadenas y distribuidores.
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="group shrink-0 bg-[#141514] text-white text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-2.5 hover:bg-black active:scale-[0.98] transition-all"
                >
                  <span>Alianzas Corporativas</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BANNER PANORÁMICO DE CALIDAD & ESTÁNDARES (High-End Photo Hero)
          ========================================================================= */}
      <section id="estandares" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden min-h-[460px] sm:min-h-[520px] shadow-2xl border border-black/5 flex flex-col justify-between p-6 sm:p-10 md:p-14 text-white">
          {/* Imagen de Fondo: Especialista agrícola en campo al atardecer con tablet */}
          <img
            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1600&auto=format&fit=crop"
            alt="Control de calidad agrícola y tecnología de campo"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Overlay Oscuro Gradual para Legibilidad Extrema */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

          {/* Top Bar sobre Imagen */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#E5C158] bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              Certificación, inocuidad y calibre
            </span>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs">
              <Sprout className="w-3.5 h-3.5 text-[#E5C158]" />
              <span className="font-semibold">Vida Sana Standards</span>
            </div>
          </div>

          {/* Declaración Central Oversized */}
          <div className="relative z-10 my-auto py-8 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4">
              Aseguramos alta calidad en cada producto, entregas estables y cumplimiento riguroso de normas sanitarias.
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              Cada partida de hortalizas y frutas es calibrada en origen y transportada bajo estrictas condiciones de temperatura para garantizar una mayor vida útil en tus góndolas y cocinas.
            </p>
          </div>

          {/* Badges Inferiores Superpuestos */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-white/15">
            {/* 3 Iconos en Píldoras Translúcidas */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E5C158]">
                <Wheat className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E5C158]">
                <Sun className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E5C158]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            {/* 3 Métricas en Tarjetas Blancas Flotantes */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[#141514]">
              <div className="bg-white rounded-2xl px-4 py-2.5 shadow-md border border-black/5 text-center min-w-[100px]">
                <div className="text-base sm:text-lg font-extrabold font-mono">Nº 1</div>
                <div className="text-[9px] uppercase font-bold text-[#6D7468]">En Selección</div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-2.5 shadow-md border border-black/5 text-center min-w-[100px]">
                <div className="text-base sm:text-lg font-extrabold font-mono">24-48h</div>
                <div className="text-[9px] uppercase font-bold text-[#6D7468]">Despacho</div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-2.5 shadow-md border border-black/5 text-center min-w-[100px]">
                <div className="text-base sm:text-lg font-extrabold font-mono">0%</div>
                <div className="text-[9px] uppercase font-bold text-[#6D7468]">Quiebre Frío</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SEGUNDO BLOQUE EDITORIAL / INNOVACIÓN AGRÍCOLA
          ========================================================================= */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Izquierda: Pill de agricultor trabajando */}
          <div className="lg:col-span-3 flex justify-start">
            <div className="w-36 h-40 sm:w-48 sm:h-52 rounded-3xl overflow-hidden border border-black/5 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=600&auto=format&fit=crop"
                alt="Productor agrícola en terreno"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Centro: Mensaje de preservación y sustentabilidad */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3B583E]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#596053]">
                Innovación Sostenible
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#141514] tracking-tight mb-4 leading-snug">
              Producimos alimentos de alta calidad combinando tecnología agrícola y cuidado de la tierra
            </h3>
            <p className="text-sm sm:text-base text-[#596053] leading-relaxed mb-6">
              Nuestro propósito es abastecer con productos limpios y seguros, impulsando el desarrollo de los agricultores de nuestra zona central y garantizando una producción sustentable para las futuras generaciones.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#contacto"
                className="group bg-[#141514] text-white text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Contactar con un Ejecutivo</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Derecha: Pill de campo verde */}
          <div className="lg:col-span-3 flex justify-end">
            <div className="w-36 h-40 sm:w-48 sm:h-52 rounded-3xl overflow-hidden border border-black/5 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=600&auto=format&fit=crop"
                alt="Campos verdes y producción tecnificada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. VALORES Y ESTÁNDARES (Bento Grid con Chips / Tags Ovalados)
          ========================================================================= */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-black/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A8275]">
              Nuestra Propuesta de Valor
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#141514] tracking-tight mt-1">
              Pilares operativos a los que nos apegamos:
            </h3>
          </div>
          {/* Controles de Navegación Visual (Flechas Redondas) */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#141514] hover:bg-black/5 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#E5C158] text-[#141514] flex items-center justify-center hover:brightness-105 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid: 3 Tarjetas con Tags / Chips Ovalados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Desarrollo Sustentable (Blanca) */}
          <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#8C6B16] mb-4">
                (01) Desarrollo Sustentable
              </div>
              <h4 className="text-lg font-bold text-[#141514] mb-5">
                Manejo responsable y preservación de recursos
              </h4>

              {/* Tags en Píldora */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Manejo Hídrico', 'Rotación', 'Trazabilidad', 'Cero Merma', 'Eco-Agrícola'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#F4F4F0] border border-black/5 text-[11px] font-semibold text-[#545B4F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-[#6A7165] leading-relaxed pt-4 border-t border-black/5">
              Preservamos los recursos naturales mediante riego tecnificado y aplicamos estándares que protegen la salud de la tierra.
            </p>
          </div>

          {/* Tarjeta 2: Suministro Directo (Oscura / Destacada) */}
          <div className="bg-[#171A17] text-white rounded-3xl p-7 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#E5C158] mb-4">
                (02) Suministro Directo
              </div>
              <h4 className="text-lg font-bold text-white mb-5">
                Sin intermediarios, del campo a tu centro logístico
              </h4>

              {/* Tags en Píldora Estilo Oscuro */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Fresco', 'Flota Propia', 'Puntual', 'Ruta Diaria', '24-48 hrs'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-[#A5AEA2] leading-relaxed pt-4 border-t border-white/10">
              Despachamos directamente desde los centros de cosecha para reducir el tiempo en tránsito y asegurar la máxima frescura en tu andén.
            </p>
          </div>

          {/* Tarjeta 3: Calidad Certificada (Blanca) */}
          <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#3B583E] mb-4">
                (03) Calidad Certificada
              </div>
              <h4 className="text-lg font-bold text-[#141514] mb-5">
                Uniformidad de calibre y control bromatológico
              </h4>

              {/* Tags en Píldora */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Resolución Sanitaria', 'Calibre Homogéneo', 'Filtro UV Mallas', 'Estándar HORECA'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#F4F4F0] border border-black/5 text-[11px] font-semibold text-[#545B4F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-[#6A7165] leading-relaxed pt-4 border-t border-black/5">
              Todos nuestros productos cuentan con trazabilidad por lote y cumplen con los protocolos exigidos por cadenas hoteleras e industriales.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CATÁLOGO MAYORISTA DESTACADO (Bento de Productos Clave)
          ========================================================================= */}
      <section id="catalogo" className="py-16 px-4 max-w-7xl mx-auto border-t border-black/5">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C6B16]">
            Líneas de Producción y Abastecimiento
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#141514] tracking-tight mt-1">
            Catálogo Agroindustrial Mayorista
          </h3>
          <p className="text-xs sm:text-sm text-[#666D61] mt-2">
            Volumen garantizado todo el año para casinos, distribuidores y retail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Producto 1: Hortalizas y Tubérculos */}
          <div className="group bg-white rounded-3xl p-3 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-52 rounded-2xl overflow-hidden relative mb-4">
              <img
                src="wp-content/uploads/2020/02/papa1.jpg"
                alt="Papas y tubérculos seleccionados"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=500&auto=format&fit=crop';
                }}
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#141514]">
                Hortalizas
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#141514] mb-1">
                  Tubérculos & Hortalizas
                </h4>
                <p className="text-xs text-[#6A7165] leading-relaxed mb-4">
                  Papas, cebollas, tomates y ajos seleccionados por calibre comercial uniforme. Menor merma en cocina.
                </p>
              </div>
              <a
                href="#contacto"
                className="w-full py-2.5 rounded-full bg-[#F4F4F0] hover:bg-[#141514] hover:text-white text-xs font-semibold text-[#141514] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Cotizar Lote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Producto 2: Frutas de Temporada */}
          <div className="group bg-white rounded-3xl p-3 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-52 rounded-2xl overflow-hidden relative mb-4">
              <img
                src="wp-content/uploads/2020/02/palta1.jpg"
                alt="Paltas y frutas de temporada"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=500&auto=format&fit=crop';
                }}
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#141514]">
                Frutas
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#141514] mb-1">
                  Frutas Seleccionadas
                </h4>
                <p className="text-xs text-[#6A7165] leading-relaxed mb-4">
                  Paltas Hass, cítricos, sandías y melones con madurez homogénea para consumo inmediato o reventa.
                </p>
              </div>
              <a
                href="#contacto"
                className="w-full py-2.5 rounded-full bg-[#F4F4F0] hover:bg-[#141514] hover:text-white text-xs font-semibold text-[#141514] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Cotizar Lote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Producto 3: Aceites Profesionales */}
          <div className="group bg-white rounded-3xl p-3 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-52 rounded-2xl overflow-hidden relative mb-4">
              <img
                src="wp-content/uploads/2021/10/fritura.jpg"
                alt="Aceites profesionales para fritura y gastronomía"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=500&auto=format&fit=crop';
                }}
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#141514]">
                Aceites B2B
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#141514] mb-1">
                  Aceites Gastronómicos
                </h4>
                <p className="text-xs text-[#6A7165] leading-relaxed mb-4">
                  Aceite refinado de maravilla, soja y formulaciones de alto rendimiento térmico para fritura industrial.
                </p>
              </div>
              <a
                href="#contacto"
                className="w-full py-2.5 rounded-full bg-[#F4F4F0] hover:bg-[#141514] hover:text-white text-xs font-semibold text-[#141514] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Cotizar Lote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Producto 4: Mallas Agrícolas Raschel */}
          <div className="group bg-white rounded-3xl p-3 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-52 rounded-2xl overflow-hidden relative mb-4">
              <img
                src="wp-content/uploads/2020/02/mallaraschel_int2.jpg"
                alt="Mallas agrícolas Raschel con filtro UV"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500&auto=format&fit=crop';
                }}
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#141514]">
                Insumos & Malla
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#141514] mb-1">
                  Mallas Raschel & Empaque
                </h4>
                <p className="text-xs text-[#6A7165] leading-relaxed mb-4">
                  Mallas de sombreo con estabilizador UV y sacos de ventilación para transporte seguro de cosechas.
                </p>
              </div>
              <a
                href="#contacto"
                className="w-full py-2.5 rounded-full bg-[#F4F4F0] hover:bg-[#141514] hover:text-white text-xs font-semibold text-[#141514] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Cotizar Lote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. CONTACTO & CIERRE COMERCIAL B2B
          ========================================================================= */}
      <section id="contacto" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 border border-black/5 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="px-3.5 py-1 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/40 text-[#8C6B16] text-[10px] uppercase font-bold tracking-[0.2em]">
              Atención Inmediata
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#141514] tracking-tight mt-3 mb-3">
              Asegura el abastecimiento agrícola de tu operación
            </h3>
            <p className="text-sm text-[#5B6356] leading-relaxed">
              Cotiza hoy con nuestra mesa ejecutiva. Respondemos en menos de 2 horas con disponibilidad de lote y tarifas preferenciales por volumen.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Solicitud enviada. Un ejecutivo comercial de Agrocomercial Vida Sana te contactará en breve.');
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            <div className="sm:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6A7164] mb-1.5">
                Nombre y Apellido
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Rodrigo Fernández"
                className="w-full px-4 py-3 rounded-full bg-[#F7F7F4] border border-black/10 text-xs text-[#141514] focus:outline-none focus:ring-2 focus:ring-[#141514]"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6A7164] mb-1.5">
                Empresa o Razón Social
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Casino Industrial del Valle"
                className="w-full px-4 py-3 rounded-full bg-[#F7F7F4] border border-black/10 text-xs text-[#141514] focus:outline-none focus:ring-2 focus:ring-[#141514]"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6A7164] mb-1.5">
                Teléfono de Contacto
              </label>
              <input
                type="tel"
                required
                placeholder="+56 9 1234 5678"
                className="w-full px-4 py-3 rounded-full bg-[#F7F7F4] border border-black/10 text-xs text-[#141514] focus:outline-none focus:ring-2 focus:ring-[#141514]"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6A7164] mb-1.5">
                Línea de Interés
              </label>
              <select className="w-full px-4 py-3 rounded-full bg-[#F7F7F4] border border-black/10 text-xs text-[#141514] focus:outline-none focus:ring-2 focus:ring-[#141514]">
                <option value="hortalizas">Hortalizas & Tubérculos</option>
                <option value="frutas">Frutas de Temporada</option>
                <option value="aceites">Aceites Profesionales</option>
                <option value="mallas">Mallas Agrícolas Raschel</option>
                <option value="mix">Abastecimiento Completo Mixto</option>
              </select>
            </div>
            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full bg-[#141514] hover:bg-black text-white text-xs font-semibold py-3.5 rounded-full flex items-center justify-center gap-3 transition-all shadow-md active:scale-[0.99]"
              >
                <span>Enviar Solicitud de Cotización</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5C158]" />
              </button>
            </div>
          </form>

          {/* Vías Directas */}
          <div className="mt-8 pt-8 border-t border-black/5 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6A7164]">
            <a href="tel:+56984182060" className="flex items-center gap-2 hover:text-[#141514]">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>+56 9 8418 2060 / +56 9 7589 8882</span>
            </a>
            <span className="text-black/20">·</span>
            <a href="mailto:ventas@agrocomercialvidasana.cl" className="flex items-center gap-2 hover:text-[#141514]">
              <Mail className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>ventas@agrocomercialvidasana.cl</span>
            </a>
            <span className="text-black/20">·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#6A7164]" />
              <span>Santiago, Chile</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FOOTER EDITORIAL MODERNO
          ========================================================================= */}
      <footer className="py-12 px-4 max-w-7xl mx-auto border-t border-black/5 text-xs text-[#7A8275] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#E5C158] flex items-center justify-center text-[#141514]">
            <Sprout className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-[#141514]">Agrocomercial Vida Sana Ltda.</span>
          <span className="text-black/20">|</span>
          <span>Producción y Distribución Agroindustrial</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#141514] transition-colors">Términos Comerciales</a>
          <a href="#" className="hover:text-[#141514] transition-colors">Inocuidad & Calidad</a>
          <a href="#contacto" className="hover:text-[#141514] transition-colors">Mesa de Pedidos</a>
        </div>
        <div>
          © {new Date().getFullYear()} Vida Sana. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
