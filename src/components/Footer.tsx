const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-16 lg:gap-24 mb-12">
          {/* Logo - Left */}
          <div className="flex items-start">
            <h2 className="text-[56px] md:text-[72px] lg:text-[80px] font-bold tracking-tight leading-none">VÉR-A</h2>
          </div>

          {/* Address - Center */}
          <div className="flex flex-col justify-start space-y-0.5">
            <p className="text-base md:text-lg">36 Boulevard de la Bastille</p>
            <p className="text-base md:text-lg">75012 Paris</p>
          </div>

          {/* Contact - Right */}
          <div className="flex flex-col justify-start space-y-0.5 md:text-right">
            <p className="text-base md:text-lg">contact@verarchitecture.com</p>
            <p className="text-base md:text-lg">+33 (0)6 32 79 59 38</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border">
          {/* Copyright & Credits */}
          <div className="flex items-center gap-6 text-sm">
            <span>© ver architecture 2025</span>
            <a href="#" className="hover:opacity-70 transition-opacity">credits</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 text-sm font-medium uppercase">
            <a href="#" className="hover:opacity-70 transition-opacity">INSTAGRAM</a>
            <a href="#" className="hover:opacity-70 transition-opacity">FACEBOOK</a>
            <a href="#" className="hover:opacity-70 transition-opacity">PINTEREST</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;