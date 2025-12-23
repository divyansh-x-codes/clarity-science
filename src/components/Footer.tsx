import { motion } from "framer-motion";
import { Youtube, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Science</span> by KanakSom
            </h3>
            <p className="text-sm text-muted-foreground">
              Free CTET Science Preparation
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.youtube.com/@kanaksom1306/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/chemistry_by_kanaksom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-highlight hover:bg-highlight/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@kanaksom.com"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-8 border-t border-border/20 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> for aspiring teachers
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © 2024 Science by KanakSom. All content is free forever.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
