import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              {config.projectName}
            </div>
            <div className="flex gap-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-0"></div>
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {config.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {config.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition shadow-xl hover:shadow-2xl text-lg"
              >
                Get Free Quote
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition shadow-xl text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10MW+</div>
              <div className="text-white/90 text-lg">Energy Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/90 text-lg">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar energy solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full bg-gradient-to-br from-orange-100 to-blue-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"
                  alt="Residential Solar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Residential Solar</h3>
                <p className="text-gray-600 mb-4">
                  Power your home with clean, renewable solar energy. Reduce electricity bills and increase property value.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> Customized system design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> Professional installation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> 25-year warranty
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full bg-gradient-to-br from-orange-100 to-blue-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070"
                  alt="Commercial Solar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Solar</h3>
                <p className="text-gray-600 mb-4">
                  Scale up your business operations with cost-effective commercial solar solutions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> Large-scale installations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> ROI optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> Maintenance support
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 w-full bg-gradient-to-br from-orange-100 to-blue-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070"
                  alt="Solar Maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Maintenance & Support</h3>
                <p className="text-gray-600 mb-4">
                  Keep your solar system running at peak efficiency with our comprehensive maintenance services.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> Regular inspections
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> Performance monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">✓</span> 24/7 support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose {config.projectName}?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading the solar revolution with innovation and excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">☀️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Energy</h3>
              <p className="text-gray-600">
                Harness renewable solar energy to power your home and business sustainably.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">
                Reduce your electricity bills significantly with our efficient solar solutions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco Friendly</h3>
              <p className="text-gray-600">
                Contribute to a greener planet with zero-emission solar energy systems.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Efficiency</h3>
              <p className="text-gray-600">
                State-of-the-art technology ensuring maximum energy generation and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to go solar
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free site assessment and consultation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Custom system design for your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation by experts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Activation</h3>
              <p className="text-gray-600">Start generating clean energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to solar energy. Get your free quote today!
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-2xl text-lg hover:scale-105 transform"
          >
            Get Free Quote Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
                {config.projectName}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {config.description}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{config.contactEmail}</li>
                <li>{config.phone}</li>
                <li>{config.address}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Solar</li>
                <li>Commercial Solar</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {config.projectName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
