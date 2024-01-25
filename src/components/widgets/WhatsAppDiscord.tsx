import { IconBrandDiscord, IconBrandWhatsapp } from "@tabler/icons-react";

const stepsData = {
  items: [
    {
      title: "join our Discord community",
      icon: IconBrandDiscord,
      href: "https://discord.gg/j7BBsHUJSC",
    },
    {
      title: "join our WhatsApp community",
      icon: IconBrandWhatsapp,
      href: "https://chat.whatsapp.com/FC19T0CAcq0JUGJRCsxAyM",
    },
  ],
};

const WhatsAppDiscord = () => {
  const { items } = stepsData;

  return (
    <section className="mx-auto mb-12 flex w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <div className="grid grid-cols-1 gap-3 pl-4 md:grid-cols-2 md:pl-0">
          {items.map(({ title, icon: Icon, href }, index) => (
            <a
              key={`item-steps-${index}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors duration-300 hover:text-blue-700 dark:hover:text-white"
            >
              <Icon className="mr-2 h-8 w-8 hover:text-current" />
              <p className="text-xl text-gray-900 hover:text-blue-700 dark:text-slate-300 dark:hover:text-white">
                {title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDiscord;
