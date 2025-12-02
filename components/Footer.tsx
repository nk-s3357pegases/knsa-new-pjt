import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/knsahub/',
      icon: <Instagram size={20} />,
    },
    {
      name: 'X',
      url: 'https://x.com/knsahub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@knsahub',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M19 12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.55 0 2.98-.5 4.16-1.35" />
          <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
          <path d="M15.5 12v-1.5" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61583638468104',
      icon: <Facebook size={20} />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@KNSAHUB',
      icon: <Youtube size={20} />,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@knsahub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.5 5.5v10.5a3.5 3.5 0 1 1-3.5-3.5c.3 0 .6 0 .9.1V8.3c-.3-.1-.6-.1-.9-.1a7.5 7.5 0 1 0 7.5 7.5v-7.8A7.5 7.5 0 0 0 19 9v-3.7a3.8 3.8 0 0 1-2.7-1.3 3.8 3.8 0 0 1-3.8 0Z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      url: 'https://br.pinterest.com/knsahub/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.497-.698-2.433-2.888-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>
      ),
    },
    {
      name: 'Kwai',
      url: 'https://www.kwai.com/@knsahub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black py-12 border-t border-white/5 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-black border border-white/20 flex items-center justify-center rounded-sm shadow-sm">
                <span className="text-white font-bold text-lg leading-none font-sans">K</span>
              </div>
              <span className="font-bold text-white text-lg">KNSA HUB</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-4">
              Inteligência Artificial Aplicada a Negócios Reais.
            </p>
            <div className="text-xs text-gray-600">
              KNSA Hub Consultoria em Tecnologia da Informação LTDA.
              <br />
              CNPJ: 63.659.201/0001-15
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-white mb-4">Nosso endereço</h4>
            <p className="text-gray-500 leading-relaxed">
              Av. Carlos Gomes, 700 – Sala 606
              <br />
              Bairro Boa Vista – Porto Alegre / RS
              <br />
              CEP 90480-000
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-500" />
                <a
                  href="https://wa.me/5551989619880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +55 (51) 98961-9880
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-500" />
                <a
                  href="mailto:atendimento@knsahub.com"
                  className="hover:text-white transition-colors"
                >
                  atendimento@knsahub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-8">
          <h4 className="font-semibold text-white mb-4 text-center">Nossas Redes Sociais:</h4>
          <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-wrap sm:justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all border border-white/5"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 flex flex-col md:flex-row justify-center items-center gap-4">
          <span>&copy; {new Date().getFullYear()} KNSA HUB. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
