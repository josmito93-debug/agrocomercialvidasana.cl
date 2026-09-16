const fs = require('fs');
const path = require('path');

const PRODUCTS = [
  {
    slug: 'palta',
    name: 'Palta',
    fullName: 'Palta Hass Seleccionada',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/palta1-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/palta1.jpg',
    desc: 'Palta Hass nacional de textura cremosa y calibre uniforme. Maduración controlada lista para consumo o rotación en vitrina.',
    format: 'Cajas de 10 kg, mallas y bins mayoristas',
    season: 'Marzo a Noviembre',
    temp: '6°C a 8°C'
  },
  {
    slug: 'aceites-profesionales-para-fritura',
    name: 'Aceites profesionales para fritura',
    fullName: 'Aceite Profesional de Alto Rendimiento para Fritura',
    category: 'Aceites',
    tag: 'aceites',
    image: '/wp-content/uploads/2021/10/fritura-400x250.jpg',
    imageFallback: '/wp-content/uploads/2021/10/fritura.jpg',
    desc: 'Formulación gastronómica de alto rendimiento y punto de humo elevado, libre de olores residuales para cocinas industriales.',
    format: 'Bidones de 10L, 20L y tambores 200L',
    season: 'Todo el año',
    temp: 'Ambiente fresco y seco (15°C a 22°C)'
  },
  {
    slug: 'aceite-refinado-de-soja',
    name: 'Aceite refinado de Soja',
    fullName: 'Aceite Refinado 100% Puro de Soja',
    category: 'Aceites',
    tag: 'aceites',
    image: '/wp-content/uploads/2021/10/asoja-400x250.jpg',
    imageFallback: '/wp-content/uploads/2021/10/asoja.jpg',
    desc: 'Aceite vegetal refinado de sabor neutro y máxima pureza, ideal para preparación masiva de alimentos, aderezos y panadería.',
    format: 'Bidones de 20L y cajas B2B',
    season: 'Todo el año',
    temp: 'Ambiente seco sin luz solar directa'
  },
  {
    slug: 'aceite-refinado-de-maravilla',
    name: 'Aceite refinado de Maravilla',
    fullName: 'Aceite Refinado de Maravilla (Girasol)',
    category: 'Aceites',
    tag: 'aceites',
    image: '/wp-content/uploads/2021/10/aceitemaravilla-400x250.jpg',
    imageFallback: '/wp-content/uploads/2021/10/aceitemaravilla.jpg',
    desc: 'Aceite de girasol refinado de primera prensada, alto en antioxidantes naturales y con gran estabilidad térmica.',
    format: 'Envases de 5L, bidones de 20L y granel',
    season: 'Todo el año',
    temp: 'Ambiente seco y ventilado'
  },
  {
    slug: 'huevos',
    name: 'Huevos de gallina',
    fullName: 'Huevos Frescos de Gallina Seleccionados',
    category: 'Huevos',
    tag: 'huevos',
    image: '/wp-content/uploads/2021/10/huevos.jpg',
    imageFallback: '/wp-content/uploads/2021/10/huevos-300x169.jpg',
    desc: 'Huevos frescos de granja clasificados por calibre (Extra y Especial). Cáscara firme, limpia y yema de pigmentación natural.',
    format: 'Bandejas de 30 unidades / Cajas de 180 unidades',
    season: 'Todo el año',
    temp: '12°C a 18°C'
  },
  {
    slug: 'naranjas',
    name: 'Naranjas',
    fullName: 'Naranjas Valencianas y Thompson',
    category: 'Frutas y Miel',
    tag: 'frutas-miel',
    image: '/wp-content/uploads/2021/10/naranja1-400x250.jpg',
    imageFallback: '/wp-content/uploads/2021/10/naranja.jpg',
    desc: 'Cítricos de pulpa jugosa y alto rendimiento en jugo. Cosechadas con control de acidez y dulzura natural en huertos certificados.',
    format: 'Mallas de 15 kg y bins a granel',
    season: 'Mayo a Octubre',
    temp: '7°C a 10°C'
  },
  {
    slug: 'papa',
    name: 'Papa',
    fullName: 'Papas Seleccionadas por Calibre Comercial',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/papa1-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/papa1.jpg',
    desc: 'Tubérculos limpios, secos y seleccionados para minimizar la merma en pelado. Excelente comportamiento en cocción y fritura.',
    format: 'Sacos de 25 kg y mallas ventiladas',
    season: 'Todo el año',
    temp: '8°C a 12°C (ambiente oscuro)'
  },
  {
    slug: 'zapallo-italiano',
    name: 'Zapallo Italiano',
    fullName: 'Zapallo Italiano (Zucchini Fresco)',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/c1-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/c1.jpg',
    desc: 'Zucchini tierno de piel lustrosa y firme, regado con agua de pozo profundo e insumos de etiqueta verde sin residuos.',
    format: 'Cajas de 15 kg y mallas',
    season: 'Todo el año',
    temp: '8°C a 10°C'
  },
  {
    slug: 'zapallo-camote',
    name: 'Zapallo Camote',
    fullName: 'Zapallo Camote de Pulpa Densa',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/75ce9593-bfe7-4304-9eb2-09442e010a8e-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/75ce9593-bfe7-4304-9eb2-09442e010a8e.jpg',
    desc: 'Zapallo camote de pulpa maciza y color naranja intenso. Alto rendimiento en cocina y prolongada vida útil en almacenamiento.',
    format: 'Piezas calibradas y bins a granel',
    season: 'Marzo a Octubre',
    temp: '10°C a 14°C'
  },
  {
    slug: 'tomate',
    name: 'Tomate',
    fullName: 'Tomates Larga Vida de Primera',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/t3-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/tom1.jpeg',
    desc: 'Tomates de pared carnosa y maduración uniforme. Firmeza superior resistente al transporte y óptimo para ensaladas y cocina.',
    format: 'Cajas de 18 kg ventiladas',
    season: 'Todo el año',
    temp: '10°C a 13°C'
  },
  {
    slug: 'pimenton',
    name: 'Pimenton',
    fullName: 'Pimentón Cuatro Cascos (Rojo y Verde)',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/p2-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/p1.jpg',
    desc: 'Frutos de gran tamaño, cuatro cascos definidos y piel gruesa. Cultivados bajo mallas protectoras para evitar daños solares.',
    format: 'Cajas de 10 kg y mallas',
    season: 'Noviembre a Mayo',
    temp: '7°C a 10°C'
  },
  {
    slug: 'pepino',
    name: 'Pepino',
    fullName: 'Pepino de Ensalada Crujiente',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/pepino3-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/pepino1.jpg',
    desc: 'Pepinos rectos y crujientes sin amargor, cultivados bajo estrictas normas de inocuidad y regados con agua pura.',
    format: 'Cajas de 12 kg',
    season: 'Todo el año',
    temp: '10°C a 12°C'
  },
  {
    slug: 'jengibre',
    name: 'Jengibre',
    fullName: 'Jengibre Fresco de Rizoma Carnoso',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/j1-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/j1.jpg',
    desc: 'Rizomas seleccionados limpios y secos, de aroma intenso y sin hilachas secas, listos para procesamiento gastronómico.',
    format: 'Cajas de 10 kg / 13.6 kg',
    season: 'Todo el año',
    temp: '12°C a 14°C'
  },
  {
    slug: 'cebolla',
    name: 'Cebolla',
    fullName: 'Cebollas Secas Curadas de Guarda',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/cebolla2-400x250.jpeg',
    imageFallback: '/wp-content/uploads/2020/02/cebolla1.jpg',
    desc: 'Cebollas firmes con proceso de curado en campo para máxima duración. Calibre seleccionado para pelado rápido en cocina.',
    format: 'Mallas de 20 kg y sacos',
    season: 'Todo el año',
    temp: 'Ambiente fresco, oscuro y ventilado'
  },
  {
    slug: 'ajo',
    name: 'Ajo',
    fullName: 'Ajo Morado y Blanco Seleccionado',
    category: 'Hortalizas',
    tag: 'hortalizas',
    image: '/wp-content/uploads/2020/02/ajo2-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/ajo1.jpg',
    desc: 'Cabezas de ajo de dientes macizos y alto contenido oleoso. Deshidratado uniforme con excelente retención de aroma.',
    format: 'Cajas de 10 kg y ristras',
    season: 'Diciembre a Julio',
    temp: 'Ambiente seco y ventilado'
  },
  {
    slug: 'sandia',
    name: 'Sandia',
    fullName: 'Sandías Dulces de Gran Calibre',
    category: 'Frutas y Miel',
    tag: 'frutas-miel',
    image: '/wp-content/uploads/2020/02/sandia2-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/sandia.jpg',
    desc: 'Sandías de pulpa roja dulce y jugosa provenientes de los mejores valles centrales. Corte en maduración justa de azúcar.',
    format: 'Unidades por calibre y bins mayoristas',
    season: 'Diciembre a Marzo',
    temp: '12°C a 15°C'
  },
  {
    slug: 'miel-de-abeja',
    name: 'Miel de abeja',
    fullName: 'Miel 100% Pura de Floración Nativa',
    category: 'Frutas y Miel',
    tag: 'frutas-miel',
    image: '/wp-content/uploads/2020/02/miel2-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/miel1.jpg',
    desc: 'Miel pura de abeja cosechada en bosques y praderas de la zona central. Sin aditivos, sin jarabes y libre de pesticidas.',
    format: 'Baldes de 5 kg, 25 kg y tambores',
    season: 'Todo el año',
    temp: 'Temperatura ambiente'
  },
  {
    slug: 'melon',
    name: 'Melón',
    fullName: 'Melón Calameño y Tuna de Selección',
    category: 'Frutas y Miel',
    tag: 'frutas-miel',
    image: '/wp-content/uploads/2020/02/melon2-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/melon1.jpg',
    desc: 'Melones seleccionados a mano con red uniforme y aroma dulce profundo. Pulpa firme y alto índice brix.',
    format: 'Cajas de 8 a 10 unidades',
    season: 'Diciembre a Marzo',
    temp: '8°C a 10°C'
  },
  {
    slug: 'mango',
    name: 'Mango',
    fullName: 'Mangos de Pulpa Suave y Sin Fibra',
    category: 'Frutas y Miel',
    tag: 'frutas-miel',
    image: '/wp-content/uploads/2020/02/mango2-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/mango1.jpg',
    desc: 'Frutos tropicales seleccionados por calibre y madurez uniforme. Pulpa cremosa con dulzura equilibrada.',
    format: 'Cajas de 4 kg y 6 kg',
    season: 'Noviembre a Abril',
    temp: '10°C a 12°C'
  },
  {
    slug: 'limon',
    name: 'Limon',
    fullName: 'Limón de Alta Acidez y Jugo Abundante',
    category: 'Frutas y Miel',
    tag: 'frutas-miel',
    image: '/wp-content/uploads/2020/02/limon2-400x250.jpg',
    imageFallback: '/wp-content/uploads/2020/02/limon1.jpg',
    desc: 'Limones de cáscara brillante y alto porcentaje de zumo, cultivados con agua de pozo e insumos limpios para el sector gastronómico.',
    format: 'Mallas de 18 kg y bins',
    season: 'Todo el año',
    temp: '8°C a 11°C'
  }
];

function getLoaderHtml() {
  return `
  <!-- PAGE LOADER OFICIAL VIDA SANA -->
  <div id="page-loader" class="fixed inset-0 z-[100] bg-[#0B1A12] flex flex-col items-center justify-center transition-all duration-500">
    <div class="relative flex flex-col items-center">
      <div class="absolute -inset-10 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div class="w-24 h-24 sm:w-32 sm:h-32 relative mb-4">
        <img src="/assets/brand/logo-moderno-animado.svg" alt="Agrocomercial Vida Sana" class="w-full h-full object-contain" />
      </div>
      <div class="flex flex-col items-center gap-1.5 text-center">
        <span class="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D8F3DC]">
          Agrocomercial Vida Sana
        </span>
        <span class="text-[10px] text-[#52B788] font-medium tracking-wider">
          Insumos Orgánicos · Agua de Pozo · Selección B2B
        </span>
        <div class="w-44 h-1 bg-white/10 rounded-full overflow-hidden mt-3">
          <div class="h-full bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#E5C158] rounded-full animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  </div>
  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        var loader = document.getElementById('page-loader');
        if (loader) {
          loader.style.opacity = '0';
          loader.style.pointerEvents = 'none';
          setTimeout(function() { loader.remove(); }, 500);
        }
      }, 350);
    });
  </script>
  `;
}

function generateProductHtml(prod) {
  const related = PRODUCTS.filter(p => p.slug !== prod.slug && p.category === prod.category).slice(0, 3);
  if (related.length < 3) {
    const others = PRODUCTS.filter(p => p.slug !== prod.slug && !related.includes(p)).slice(0, 3 - related.length);
    related.push(...others);
  }

  return `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${prod.fullName} — Agrocomercial Vida Sana</title>
  <meta name="description" content="${prod.desc}" />
  <link rel="icon" href="/wp-content/uploads/2021/10/logot.ico" />

  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              forest: '#1B4332',
              emerald: '#2D6A4F',
              leaf: '#40916C',
              mint: '#52B788',
              lightMint: '#D8F3DC',
              cream: '#F7F9F6',
              dark: '#0D1F16',
            }
          }
        }
      }
    }
  </script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body { background-color: #F7F9F6; color: #0D1F16; font-family: 'Plus Jakarta Sans', sans-serif; }
    ::selection { background-color: #52B788; color: #0D1F16; }
  </style>
</head>
<body class="min-h-screen bg-[#F7F9F6] text-[#0D1F16] antialiased">
  ${getLoaderHtml()}

  <!-- NAVEGACIÓN -->
  <header class="sticky top-5 z-50 px-4 max-w-6xl mx-auto">
    <nav class="bg-white/95 backdrop-blur-xl border border-[#2D6A4F]/15 rounded-full px-5 py-2.5 shadow-[0_12px_40px_-15px_rgba(27,67,50,0.12)] flex items-center justify-between">
      <a href="/" class="flex items-center gap-3 group">
        <img src="/assets/brand/logo_original_clean_512.png" alt="Vida Sana" class="w-8 h-8 object-contain group-hover:scale-105 transition-transform" />
        <div class="flex flex-col">
          <span class="text-sm font-extrabold tracking-tight text-[#1B4332] leading-tight">Vida Sana</span>
          <span class="text-[9px] uppercase tracking-[0.2em] font-bold text-[#52B788]">Agrocomercial</span>
        </div>
      </a>

      <div class="hidden md:flex items-center gap-1 text-xs font-medium text-[#2D6A4F]">
        <a href="/" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Inicio</a>
        <a href="/quienes-somos/" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Quiénes Somos</a>
        <a href="/#productos" class="px-4 py-1.5 rounded-full bg-[#1B4332] text-white shadow-sm font-semibold">Productos</a>
        <a href="/#red-logistica" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Logística</a>
        <a href="/#contacto" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Contacto</a>
      </div>

      <div class="flex items-center gap-3">
        <a href="/#contacto" class="group bg-[#1B4332] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#2D6A4F] transition-all shadow-sm">
          <span>Cotizar Mayorista</span>
          <span class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <i data-lucide="arrow-up-right" class="w-3 h-3 text-white"></i>
          </span>
        </a>
      </div>
    </nav>
  </header>

  <!-- BREADCRUMB -->
  <div class="max-w-6xl mx-auto px-4 pt-8">
    <div class="flex items-center gap-2 text-xs text-[#52B788] font-semibold">
      <a href="/" class="hover:text-[#1B4332] transition-colors">Inicio</a>
      <span>/</span>
      <a href="/#productos" class="hover:text-[#1B4332] transition-colors">Productos</a>
      <span>/</span>
      <span class="text-[#1B4332]">${prod.name}</span>
    </div>
  </div>

  <!-- PRODUCT HERO DETAIL -->
  <main class="max-w-6xl mx-auto px-4 py-8">
    <div class="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 border border-[#2D6A4F]/10 shadow-[0_20px_60px_-15px_rgba(27,67,50,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      <!-- FOTO PRINCIPAL -->
      <div class="lg:col-span-6 relative">
        <div class="relative h-[380px] sm:h-[460px] rounded-[2rem] overflow-hidden border border-[#2D6A4F]/10 shadow-md">
          <img
            src="${prod.image}"
            alt="${prod.fullName}"
            class="w-full h-full object-cover"
            onerror="this.src='${prod.imageFallback}'"
          />
          <span class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#1B4332]/90 text-[#D8F3DC] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            ${prod.category}
          </span>
          <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-black/5 flex items-center justify-between text-xs text-[#1B4332]">
            <span class="flex items-center gap-1.5 font-bold">
              <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
              Insumos Etiqueta Verde
            </span>
            <span class="font-mono text-[11px] text-gray-500">Agua de Pozo</span>
          </div>
        </div>
      </div>

      <!-- INFORMACIÓN Y FICHA TÉCNICA -->
      <div class="lg:col-span-6 flex flex-col justify-between">
        <div>
          <div class="inline-flex items-center gap-2 mb-3">
            <span class="px-3 py-1 rounded-full bg-[#D8F3DC] text-[#1B4332] text-[10px] font-bold uppercase tracking-widest">
              Garantía Agrocomercial Vida Sana
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight mb-3">
            ${prod.fullName}
          </h1>
          <p class="text-sm sm:text-base text-[#405649] leading-relaxed mb-6">
            ${prod.desc}
          </p>

          <!-- CARACTERÍSTICAS TÉCNICAS -->
          <div class="space-y-3 bg-[#F7F9F6] p-5 rounded-2xl border border-[#2D6A4F]/10 mb-8 text-xs">
            <div class="flex justify-between items-center py-1.5 border-b border-black/5">
              <span class="text-gray-500 font-semibold uppercase text-[10px]">Categoría</span>
              <span class="font-bold text-[#1B4332]">${prod.category}</span>
            </div>
            <div class="flex justify-between items-center py-1.5 border-b border-black/5">
              <span class="text-gray-500 font-semibold uppercase text-[10px]">Formato Mayorista</span>
              <span class="font-bold text-[#1B4332]">${prod.format}</span>
            </div>
            <div class="flex justify-between items-center py-1.5 border-b border-black/5">
              <span class="text-gray-500 font-semibold uppercase text-[10px]">Disponibilidad</span>
              <span class="font-bold text-emerald-700">${prod.season}</span>
            </div>
            <div class="flex justify-between items-center py-1.5">
              <span class="text-gray-500 font-semibold uppercase text-[10px]">Conservación</span>
              <span class="font-mono font-medium text-[#1B4332]">${prod.temp}</span>
            </div>
          </div>
        </div>

        <!-- BOTONES DE ACCIÓN DIRECTA -->
        <div class="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/56984182060?text=Hola,%20quisiera%20cotizar%20${encodeURIComponent(prod.name)}%20al%20por%20mayor"
            target="_blank"
            rel="noreferrer"
            class="flex-1 min-w-[200px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-[0.98]"
          >
            <i data-lucide="phone" class="w-4 h-4"></i>
            <span>Cotizar por WhatsApp</span>
          </a>
          <a
            href="/#contacto"
            class="bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-semibold py-3.5 px-6 rounded-full flex items-center gap-2 transition-all"
          >
            <span>Mesa de Pedidos</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- PRODUCTOS RELACIONADOS -->
    <div class="mt-16">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-[#1B4332]">Otros productos de interés</h3>
        <a href="/#productos" class="text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-1">
          Ver todo el catálogo <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        ${related.map(r => `
          <a href="/productos/${r.slug}/" class="group bg-white rounded-3xl p-3 border border-[#2D6A4F]/10 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div class="h-44 rounded-2xl overflow-hidden mb-3">
              <img src="${r.image}" alt="${r.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='${r.imageFallback}'" />
            </div>
            <div class="p-2 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">${r.category}</span>
                <h4 class="text-sm font-bold text-[#1B4332] mt-0.5">${r.name}</h4>
              </div>
              <div class="mt-3 pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#2D6A4F] font-semibold">
                <span>Ver ficha</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="py-12 px-4 max-w-7xl mx-auto border-t border-[#2D6A4F]/10 text-xs text-[#4E6759] flex flex-col sm:flex-row items-center justify-between gap-4 mt-16">
    <div class="flex items-center gap-2.5">
      <img src="/assets/brand/logo_original_clean_512.png" alt="Vida Sana" class="w-6 h-6 object-contain" />
      <span class="font-bold text-[#1B4332]">Agrocomercial Vida Sana Ltda.</span>
    </div>
    <div class="flex items-center gap-6">
      <a href="/" class="hover:text-[#1B4332]">Inicio</a>
      <a href="/quienes-somos/" class="hover:text-[#1B4332]">Quiénes Somos</a>
      <a href="/#productos" class="hover:text-[#1B4332]">Catálogo</a>
      <a href="/#contacto" class="hover:text-[#1B4332]">Contacto</a>
    </div>
    <div>© 2026 Vida Sana. Santiago, Chile.</div>
  </footer>

  <script>lucide.createIcons();</script>
</body>
</html>`;
}

// 1. Generar cada página de producto
console.log('Generando páginas de productos...');
for (const prod of PRODUCTS) {
  const dir = path.join(__dirname, '..', 'productos', prod.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateProductHtml(prod), 'utf-8');
  console.log(`✓ /productos/${prod.slug}/index.html`);
}

// 2. Generar página Quiénes Somos
console.log('Generando /quienes-somos/index.html...');
const quienesSomosHtml = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiénes Somos — Agrocomercial Vida Sana</title>
  <meta name="description" content="Conoce la historia, misión y red logística de Agrocomercial Vida Sana. Presentes en Lo Valledor, Vega Central, Vega Modelo de Concepción, Valparaíso y canal HORECA a lo largo de Chile." />
  <link rel="icon" href="/wp-content/uploads/2021/10/logot.ico" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              forest: '#1B4332',
              emerald: '#2D6A4F',
              leaf: '#40916C',
              mint: '#52B788',
              lightMint: '#D8F3DC',
              cream: '#F7F9F6',
              dark: '#0D1F16',
            }
          }
        }
      }
    }
  </script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    body { background-color: #F7F9F6; color: #0D1F16; font-family: 'Plus Jakarta Sans', sans-serif; }
    ::selection { background-color: #52B788; color: #0D1F16; }
  </style>
</head>
<body class="min-h-screen bg-[#F7F9F6] text-[#0D1F16] antialiased">
  ${getLoaderHtml()}

  <!-- NAVEGACIÓN -->
  <header class="sticky top-5 z-50 px-4 max-w-6xl mx-auto">
    <nav class="bg-white/95 backdrop-blur-xl border border-[#2D6A4F]/15 rounded-full px-5 py-2.5 shadow-[0_12px_40px_-15px_rgba(27,67,50,0.12)] flex items-center justify-between">
      <a href="/" class="flex items-center gap-3 group">
        <img src="/assets/brand/logo_original_clean_512.png" alt="Vida Sana" class="w-8 h-8 object-contain group-hover:scale-105 transition-transform" />
        <div class="flex flex-col">
          <span class="text-sm font-extrabold tracking-tight text-[#1B4332] leading-tight">Vida Sana</span>
          <span class="text-[9px] uppercase tracking-[0.2em] font-bold text-[#52B788]">Agrocomercial</span>
        </div>
      </a>

      <div class="hidden md:flex items-center gap-1 text-xs font-medium text-[#2D6A4F]">
        <a href="/" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Inicio</a>
        <a href="/quienes-somos/" class="px-4 py-1.5 rounded-full bg-[#1B4332] text-white shadow-sm font-semibold">Quiénes Somos</a>
        <a href="/#productos" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Catálogo Mayorista</a>
        <a href="/#red-logistica" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Red Logística</a>
        <a href="/#contacto" class="px-3.5 py-1.5 rounded-full hover:bg-[#D8F3DC]/40 transition-colors">Contacto</a>
      </div>

      <div class="flex items-center gap-3">
        <a href="/#contacto" class="group bg-[#1B4332] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#2D6A4F] transition-all shadow-sm">
          <span>Cotizar</span>
          <span class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <i data-lucide="arrow-up-right" class="w-3 h-3 text-white"></i>
          </span>
        </a>
      </div>
    </nav>
  </header>

  <!-- HERO QUIÉNES SOMOS -->
  <section class="pt-12 pb-16 px-4 max-w-6xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="px-3.5 py-1.5 rounded-full bg-[#D8F3DC] border border-[#2D6A4F]/20 text-[#1B4332] text-[10px] uppercase font-bold tracking-[0.2em]">
        Trayectoria & Compromiso Agroindustrial
      </span>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1B4332] tracking-tight mt-4 mb-6 leading-tight">
        Conectamos la fertilidad del campo con los grandes mercados de Chile
      </h1>
      <p class="text-base sm:text-lg text-[#3D5648] leading-relaxed">
        Somos una empresa que cuenta con un equipo humano experimentado, de excelente nivel y atención personalizada, dedicados a entregar soluciones agrícolas de calidad superior en todo el país.
      </p>
    </div>

    <!-- BENTO GRID CORPORATIVO -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      
      <!-- FOTO PRINCIPAL -->
      <div class="md:col-span-7 bg-white rounded-[2.5rem] p-3 border border-[#2D6A4F]/10 shadow-lg">
        <div class="relative h-[360px] sm:h-[420px] rounded-[2rem] overflow-hidden">
          <img
            src="/wp-content/uploads/2020/02/468234878_custom-116a4d3baf7551f32bbf897683d377fbb29f7114-s800-c85.jpg"
            alt="Equipo de trabajo y campos de Agrocomercial Vida Sana"
            class="w-full h-full object-cover"
            onerror="this.src='https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1000&auto=format&fit=crop'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0D1F16]/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="text-xs uppercase tracking-widest font-bold text-[#D8F3DC]">Capital Humano</span>
            <h3 class="text-xl font-bold mt-1">Equipo calificado en terreno y logística de frío</h3>
            <p class="text-xs text-white/80 mt-1">Ambiente de trabajo profesional enfocado en brindar la mejor solución a la medida de cada cliente.</p>
          </div>
        </div>
      </div>

      <!-- PRESENCIA EN MERCADOS MAYORISTAS -->
      <div class="md:col-span-5 bg-[#1B4332] text-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8F3DC] text-[10px] uppercase font-bold tracking-widest mb-4">
            Presencia Consolidada
          </div>
          <h3 class="text-2xl font-extrabold mb-3">Abastecimiento en los principales terminales de Chile</h3>
          <p class="text-xs sm:text-sm text-[#B7E4C7] leading-relaxed mb-6">
            Nuestros productos agrícolas frescos y procesados abastecen diariamente a:
          </p>
          <ul class="space-y-2.5 text-xs text-white/90">
            <li class="flex items-center gap-2.5">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-[#52B788]"></i>
              <span>Centro de Distribución Lo Valledor</span>
            </li>
            <li class="flex items-center gap-2.5">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-[#52B788]"></i>
              <span>Vega Central de Santiago</span>
            </li>
            <li class="flex items-center gap-2.5">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-[#52B788]"></i>
              <span>Vega Modelo de Concepción</span>
            </li>
            <li class="flex items-center gap-2.5">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-[#52B788]"></i>
              <span>Mercado Central de Valparaíso</span>
            </li>
            <li class="flex items-center gap-2.5">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-[#52B788]"></i>
              <span>Ferias Libres y Cadenas de Supermercados</span>
            </li>
          </ul>
        </div>
        <div class="mt-6 pt-6 border-t border-white/10 text-[11px] text-[#A3D9B5]">
          Despachos coordinados desde la zona central hasta el norte y sur del país.
        </div>
      </div>

      <!-- MISIÓN -->
      <div class="md:col-span-4 bg-white rounded-3xl p-7 border border-[#2D6A4F]/10 shadow-sm">
        <div class="w-10 h-10 rounded-full bg-[#D8F3DC] text-[#1B4332] flex items-center justify-center mb-4">
          <i data-lucide="target" class="w-5 h-5"></i>
        </div>
        <h4 class="text-lg font-bold text-[#1B4332] mb-2">Nuestra Misión</h4>
        <p class="text-xs text-[#405649] leading-relaxed">
          Contribuir a que nuestros clientes reciban un servicio confiable y oportuno, con un equipo humano especializado y permanentemente preocupado por la calidad de nuestros productos e insumos agrícolas, garantizando una atención integral y amplia accesibilidad.
        </p>
      </div>

      <!-- VISIÓN -->
      <div class="md:col-span-4 bg-white rounded-3xl p-7 border border-[#2D6A4F]/10 shadow-sm">
        <div class="w-10 h-10 rounded-full bg-[#D8F3DC] text-[#1B4332] flex items-center justify-center mb-4">
          <i data-lucide="compass" class="w-5 h-5"></i>
        </div>
        <h4 class="text-lg font-bold text-[#1B4332] mb-2">Nuestra Visión</h4>
        <p class="text-xs text-[#405649] leading-relaxed">
          Ser reconocidos como el socio estratégico y proveedor agrícola de referencia en Chile por nuestra capacidad de respuesta, inocuidad alimentaria y fomento de una cadena productiva sustentable que protege tanto al agricultor como al consumidor final.
        </p>
      </div>

      <!-- COMPROMISO AMBIENTAL -->
      <div class="md:col-span-4 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white rounded-3xl p-7 shadow-sm">
        <div class="w-10 h-10 rounded-full bg-white/20 text-[#D8F3DC] flex items-center justify-center mb-4">
          <i data-lucide="leaf" class="w-5 h-5"></i>
        </div>
        <h4 class="text-lg font-bold text-white mb-2">Compromiso Ecológico</h4>
        <p class="text-xs text-[#D8F3DC] leading-relaxed">
          Nuestros productos frescos son producidos principalmente con insumos orgánicos, de etiqueta verde, regados con agua de pozo profundo, respetando el medio ambiente y los ciclos naturales de la tierra.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-12 px-4 max-w-7xl mx-auto border-t border-[#2D6A4F]/10 text-xs text-[#4E6759] flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2.5">
      <img src="/assets/brand/logo_original_clean_512.png" alt="Vida Sana" class="w-6 h-6 object-contain" />
      <span class="font-bold text-[#1B4332]">Agrocomercial Vida Sana Ltda.</span>
    </div>
    <div class="flex items-center gap-6">
      <a href="/" class="hover:text-[#1B4332]">Inicio</a>
      <a href="/quienes-somos/" class="hover:text-[#1B4332] font-semibold text-[#1B4332]">Quiénes Somos</a>
      <a href="/#productos" class="hover:text-[#1B4332]">Catálogo</a>
      <a href="/#contacto" class="hover:text-[#1B4332]">Contacto</a>
    </div>
    <div>© 2026 Vida Sana. Santiago, Chile.</div>
  </footer>

  <script>lucide.createIcons();</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '..', 'quienes-somos', 'index.html'), quienesSomosHtml, 'utf-8');
console.log('✓ /quienes-somos/index.html generado exitosamente con el loader oficial');
