import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function App() {
  const whatsappUrl =
    "https://wa.me/21626982284?text=Bonjour%20Skander,%20je%20te%20contacte%20concernant%20un%20projet%20de%20site%20web";

  return (
    <div className="min-h-screen bg-[#0e0e11] text-[#eaeaea] antialiased selection:bg-white selection:text-black">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-24">
        {/* En-tête sobre / direct */}
        <header className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-tight text-white">
              Skander Zouari
            </span>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-snug">
            Développeur web front-end & interfaces sur mesure.
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
            Je conçois des sites web rapides, fluides sur mobile et centrés sur l'expérience client. 
            Spécialisé dans les applications de commande directe pour la restauration (sans commissions tierces) 
            et les présentations de produits interactives.
          </p>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Échanger sur WhatsApp (+216 26 982 284)</span>
            </a>
          </div>
        </header>

        {/* Projets réalisés */}
        <section className="space-y-10">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Projets sélectionnés
            </h2>
            <span className="text-xs text-zinc-500 font-mono">2026</span>
          </div>

          <div className="space-y-8">
            {/* Projet 1: Beef & Buns */}
            <article className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium text-white">Beef & Buns</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      Smash Burger
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    Site de commande en ligne pour restaurant smash burger. 
                    Comprend un visualiseur 3D interactif permettant d’éclater les couches d'ingrédients du burger, 
                    la personnalisation des recettes et la prise de commande directe par panier.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60">
                <span className="text-xs font-mono text-zinc-500">React · TypeScript · Tailwind</span>
                <a
                  href="https://beef-and-buns-sousse.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-zinc-300 underline underline-offset-4"
                >
                  <span>Tester le site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* Projet 2: Pervoi */}
            <article className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium text-white">Per Voi</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      Restaurant & Lounge
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    Plateforme complète pour restaurant : carte digitale dynamique, 
                    système de réservation et espace tableau de bord (host dashboard) 
                    permettant à l’équipe de gérer le flux de commandes en direct.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60">
                <span className="text-xs font-mono text-zinc-500">React · Tailwind · tRPC</span>
                <a
                  href="https://per-voi-sousse-2.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-zinc-300 underline underline-offset-4"
                >
                  <span>Tester le site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Section méthode / services concrets */}
        <section className="space-y-6 border-t border-zinc-800 pt-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Ce que je réalise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/60">
              <p className="font-medium text-white mb-1">Menus & commandes sans commission</p>
              <p className="text-xs text-zinc-400">
                Des systèmes où le client passe commande directement auprès de votre équipe (WhatsApp / dashboard) sans passer par des plateformes tierces coûteuses.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/60">
              <p className="font-medium text-white mb-1">Expérience mobile soignée</p>
              <p className="text-xs text-zinc-400">
                Interfaces pensées d'abord pour smartphone : chargement instantané, boutons faciles à toucher et parcours client sans ralentissement.
              </p>
            </div>
          </div>
        </section>

        {/* Contact direct */}
        <footer className="border-t border-zinc-800 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-white">Un projet de site ou une question ?</p>
            <p className="text-xs text-zinc-500 mt-0.5">Basé à Sousse · Disponible à distance</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 underline underline-offset-4"
          >
            <span>WhatsApp direct : +216 26 982 284</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </footer>
      </div>
    </div>
  );
}
