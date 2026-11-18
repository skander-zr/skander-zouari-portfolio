import { 
  Flame, 
  ExternalLink, 
  Layers, 
  Smartphone, 
  Sparkles, 
  Code2, 
  Send, 
  CheckCircle2, 
  ShoppingBag, 
  Utensils, 
  Zap,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

export default function App() {
  const whatsappNumber = "21626982284";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Bonjour%20Skander,%20j%27ai%20vu%20ton%20portfolio%20et%20j%27aimerais%20discuter%20d%27un%20projet%20de%20site%20web`;

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] relative overflow-hidden selection:bg-[#ff3b30] selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#ff3b30]/15 via-[#f59e0b]/5 to-transparent blur-[140px]" />
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[150px]" />
        <div className="absolute bottom-10 right-[-10%] w-[600px] h-[600px] bg-[#ff3b30]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <header className="h-24 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff3b30] to-[#f59e0b] flex items-center justify-center font-black text-white text-lg shadow-lg shadow-[#ff3b30]/25">
              SZ
            </div>
            <div>
              <span className="font-bold tracking-tight text-white block">Skander Zouari</span>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Creative Web Developer</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible pour projets
            </span>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              <Send className="w-4 h-4 text-[#ff3b30]" />
              <span className="hidden sm:inline">Discuter sur WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-12">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
              Spécialiste UI & Expériences Web Sur Mesure
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Je conçois des sites web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] via-[#f59e0b] to-[#fb923c]">
                qui marquent les esprits
              </span>
              <br />et convertissent vos clients.
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Fini les sites lents ou génériques. Je crée des expériences interactives en 3D, des applications de commande directe fluide (sans commissions tierces) et des interfaces haute performance.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <a 
                href="#projets"
                className="px-6 py-3.5 rounded-xl bg-[#ff3b30] hover:bg-[#e03126] text-white font-bold text-sm shadow-xl shadow-[#ff3b30]/30 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                Explorer mes réalisations
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 font-semibold text-sm border border-white/10 transition-all flex items-center gap-2"
              >
                Obtenir un devis rapide
              </a>
            </div>
          </div>

          {/* Quick Metrics Badge */}
          <div className="hidden lg:grid grid-cols-1 gap-4 w-72">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-8 h-8 rounded-lg bg-[#ff3b30]/20 flex items-center justify-center text-[#ff3b30] mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">Ultra Rapide & Responsive</h3>
              <p className="text-xs text-zinc-400 mt-1">Expérience fluide à 60fps sur mobile comme sur grand écran.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">Effets 3D & Interactifs</h3>
              <p className="text-xs text-zinc-400 mt-1">Décomposition de produits et animations modernes captivantes.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">Commande Directe</h3>
              <p className="text-xs text-zinc-400 mt-1">Intégration WhatsApp immédiate sans frais d'intermédiaires.</p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projets" className="py-20 border-t border-white/10">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b30]">Travaux Sélectionnés</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Des réalisations concrètes en production
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Cliquez pour tester les applications en direct avec toutes les fonctionnalités interactives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1: Beef & Buns */}
            <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 overflow-hidden flex flex-col justify-between group hover:border-[#ff3b30]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff3b30]/15">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-[#ff3b30]/20 text-[#ff3b30]">
                      <Flame className="w-5 h-5" />
                    </span>
                    <span className="font-black tracking-wider text-xl text-white">BEEF & BUNS</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-zinc-300">
                    Street Food & Burger
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#ff3b30] transition-colors">
                  Expérience Burger 3D & Commande En Ligne
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Application web interactive conçue pour une enseigne de smash burgers artisanaux. Intègre un visualiseur 3D interactif permettant d’éclater les 5 couches d’ingrédients, personnalisation d'ingrédients retirables, et commande directe sans friction.
                </p>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Viewer 3D décomposé
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Panier & Commande WhatsApp
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Filtres dynamiques & Recherche
                  </span>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-medium">Stack : React 19, TypeScript, Tailwind, Vite</span>
                <a 
                  href="https://beef-and-buns-sousse.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-[#ff3b30] hover:text-white transition-all shadow-md"
                >
                  Voir la démo en live
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project 2: Pervoi Sousse */}
            <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 overflow-hidden flex flex-col justify-between group hover:border-[#f59e0b]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f59e0b]/15">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-[#f59e0b]/20 text-[#f59e0b]">
                      <Utensils className="w-5 h-5" />
                    </span>
                    <span className="font-black tracking-wider text-xl text-white">PER VOI</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-zinc-300">
                    Restaurant & Lounge
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                  Plateforme Restaurant & Réservation Digitale
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Site élégant avec identité visuelle immersive, carte interactive des plats, gestion des créneaux horaires et tableau de bord complet dédié à la gestion d'équipe et aux commandes en salle ou à emporter.
                </p>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Menu digital interactif
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Dashboard gérant / Staff
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Optimisé SEO & Mobile
                  </span>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-medium">Stack : React, Express/tRPC, Tailwind, Fullstack</span>
                <a 
                  href="https://per-voi-sousse-2.onrender.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-[#f59e0b] hover:text-white transition-all shadow-md"
                >
                  Voir la démo en live
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why work with me / Competences */}
        <section className="py-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <Code2 className="w-8 h-8 text-[#ff3b30] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Code Propre & Moderne</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Développé avec les technologies les plus récentes (React 19, TypeScript, Tailwind). Aucune usine à gaz, vitesse de chargement instantanée.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <Smartphone className="w-8 h-8 text-[#f59e0b] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">100% Mobile First</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Plus de 80% des clients commandent depuis leur smartphone. Chaque bouton, tiroir et animation est calibré au millimètre pour le tactile.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Autonomie Totale</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zéro abonnement mensuel obligatoire ou commissions prélevées sur votre chiffre d'affaires. Le site vous appartient intégralement.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Banner */}
        <section className="py-20">
          <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#ff3b30]/20 via-[#f59e0b]/15 to-transparent border border-white/15 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">Prêt à passer au niveau supérieur ?</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Vous avez un restaurant ou un commerce à digitaliser ?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base">
                Discutons directement de votre projet. Je vous montre des prototypes adaptés à votre activité et on lance votre présence en ligne rapidement.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-extrabold text-sm hover:bg-[#ff3b30] hover:text-white transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#ff3b30] group-hover:text-white" />
                  M'écrire sur WhatsApp (+216 26 982 284)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Skander Zouari. Tous droits réservés.</p>
          <p>Conçu avec passion & précision.</p>
        </footer>
      </div>
    </div>
  );
}
