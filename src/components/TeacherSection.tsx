import { motion } from "framer-motion";
import { Youtube, Instagram, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeacherSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(245,80%,60%,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 lg:p-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold gradient-text">KS</div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Kanak Som
                </h2>
                <p className="text-lg text-accent mb-6">Chemistry Mentor</p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl"
              >
                Dedicated Chemistry Educator with passion for simplifying
                complex concepts.
              </motion.p>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative mb-8 p-6 rounded-xl bg-muted/30 border border-border/50"
              >
                <Quote className="absolute -top-3 left-4 w-6 h-6 text-primary" />
                <p className="text-foreground/80 italic">
                  "Teaching is not about telling answers, it's about building
                  understanding."
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="glass"
                  size="lg"
                  className="group"
                  asChild
                >
                  <a
                    href="https://www.youtube.com/@kanaksom1306/playlists"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-5 h-5 text-destructive group-hover:scale-110 transition-transform" />
                    YouTube Playlists
                  </a>
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  className="group"
                  asChild
                >
                  <a
                    href="https://instagram.com/chemistry_by_kanaksom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 text-highlight group-hover:scale-110 transition-transform" />
                    @chemistry_by_kanaksom
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherSection;
