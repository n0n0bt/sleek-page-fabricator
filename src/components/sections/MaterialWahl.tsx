import { Shield, Wrench, Ruler, Sparkles } from "lucide-react";

const materials = [
  {
    title: "Edelstahl",
    description: "Hochwertige Verarbeitung für langlebige Lösungen",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1535813547-3e2f90a94d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Korrosionsbeständig", "Langlebig", "Pflegeleicht"],
  },
  {
    title: "Aluminium",
    description: "Leichte und flexible Konstruktionen",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1563137724-7e80f5c8d8e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Leichtgewichtig", "Vielseitig", "Wetterfest"],
  },
  {
    title: "Stahl",
    description: "Robuste und belastbare Strukturen",
    icon: Ruler,
    image:
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Hochbelastbar", "Formstabil", "Kosteneffizient"],
  },
  {
    title: "Spezialmaterialien",
    description: "Innovative Lösungen für besondere Anforderungen",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1533062618053-d51e617307ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Individuell", "Innovativ", "Nachhaltig"],
  },
];

const MaterialWahl = () => {
  return (
    <section className="section-padding bg-white" id="materials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-6 text-steel-dark">
          Materialwahl & Kosteneffizienz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {materials.map((material) => (
            <div
              key={material.title}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={material.image}
                  alt={material.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
                      <material.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {material.title}
                    </h3>
                    <p className="text-white/90 mb-4">{material.description}</p>
                    <div className="flex flex-wrap gap-2 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {material.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialWahl;
