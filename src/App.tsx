import { ArrowUpRight, MessageCircle, MapPin, Check } from "lucide-react";

export default function App() {
  const whatsappUrl =
    "https://wa.me/21626982284?text=Bonjour%20Skander,%20je%20te%20contacte%20concernant%20un%20projet%20de%20site%20web";

  return (
    <div className="min-h-screen bg-[#111115] text-[#ececed] antialiased selection:bg-[#ff4d3d] selection:text-white">
      {/* Ligne d'accent subtile en haut */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-[#ff4d3d] to-rose-500" />

      <main className="max-w-4xl mx-auto px-6 py-14 sm:py-20 space-y-20">
        {/* Navigation / Profil */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ff4d3d] to-amber-500 flex items-center justify-center font-bold text-white text-base shadow-md">
              SZ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-base">Skander Zouari</span>
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Dispo
                </span>
              </div>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3 h-3 text-zinc-500" />
                Sousse, Tunisie · Dev Front-end & Intégration
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs transition-transform active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>M'écrire sur WhatsApp</span>
          </a>
        </header>

        {/* Hero : simple, sincère, pro */}
        <section className="space-y-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Je développe des sites web modernes pour les restaurants et commerces.
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Mon objectif : donner une vraie identité visuelle à votre enseigne et permettre à vos clients 
            de consulter le menu et commander directement sur leur téléphone, sans passer par des commissions tierces.
          </p>
        </section>

        {/* Projets concrets avec vraies photos */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Réalisations récentes
            </h2>
            <span className="text-xs text-zinc-500">2 projets en ligne</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projet 1: Beef & Buns */}
            <div className="rounded-2xl bg-[#18181f] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#ff4d3d]/50 transition-colors">
              <div className="relative h-48 bg-gradient-to-b from-[#241a18] to-[#18181f] flex items-center justify-center p-4 overflow-hidden">
                <img
                  src="/beef-and-buns.png"
                  alt="Beef and Buns"
                  className="h-40 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#ff4d3d] text-white">
                  Smash Burger
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Beef & Buns Sousse</h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    Concept pour restaurant de smash burgers artisanaux. 
                    Intègre une maquette interactive avec décomposition 3D des étages d'ingrédients, 
                    sélection des options retirables et panier de commande.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">React · Vite · Tailwind</span>
                  <a
                    href="https://beef-and-buns-sousse.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff6b5c] hover:underline"
                  >
                    <span>Voir le site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Projet 2: Per Voi */}
            <div className="rounded-2xl bg-[#18181f] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-colors">
              <div className="relative h-48 bg-gradient-to-b from-[#211d17] to-[#18181f] overflow-hidden">
                <img
                  src="/per-voi.jpg"
                  alt="Per Voi Sousse"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-500 text-black">
                  Restaurant & Lounge
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Per Voi Sousse</h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    Plateforme complète pensée pour un restaurant italien à Sousse. 
                    Carte dynamique, système de commande en ligne et espace tableau de bord 
                    permettant à l'équipe de suivre les commandes en temps réel.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">React · tRPC · Responsive</span>
                  <a
                    href="https://per-voi-sousse-2.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline"
                  >
                    <span>Voir le site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce que je propose concrètement */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1a1a24] to-[#14141a] border border-white/10 space-y-4">
          <h2 className="text-base font-bold text-white">Pourquoi travailler ensemble ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Check className="w-3.5 h-3.5 text-[#ff4d3d]" />
                <span>100% Sans Commission</span>
              </div>
              <p className="text-xs text-zinc-400">
                Vos clients commandent chez vous. Vous gardez 100% de vos marges, pas d'intermédiaire.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Ultra Fluide sur Mobile</span>
              </div>
              <p className="text-xs text-zinc-400">
                Chargement rapide, boutons clairs et expérience agréable sur n'importe quel smartphone.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Design Personnalisé</span>
              </div>
              <p className="text-xs text-zinc-400">
                Pas de thème WordPress vu 1000 fois. Un code sur mesure adapté aux couleurs de votre resto.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Contact */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-400">
          <div>
            <p className="text-white font-medium">Skander Zouari</p>
            <p className="text-zinc-500">Contact direct : +216 26 982 284</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Discuter d'un projet sur WhatsApp</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </footer>
      </main>
    </div>
  );
}
