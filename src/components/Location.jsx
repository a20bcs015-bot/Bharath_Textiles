import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
    return (
        <section id="contact" className="section-padding bg-light-gradient" style={{ background: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Visit Our <span style={{ color: 'var(--primary)' }}>Showroom</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            Experience our collections in person. Feel the fabrics and find your perfect fit at our exclusive boutique.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="icon-badge"><MapPin size={24} color="#000" /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Address</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Near New Bus Stand, 12.5411413, 78.35884, Tamil Nadu, India</p>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="icon-badge"><Mail size={24} color="#000" /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>veerabathiranbharath@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="icon-badge"><Phone size={24} color="#000" /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Call Us</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>+91 63790 87147</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                           <a href="https://instagram.com/bt_clothing24" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={20} /></a>
                           <div className="social-icon"><Facebook size={20} /></div>
                        </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', height: '450px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                    >
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.58406155866!2d78.3587249!3d12.5410205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4bf65acbfa91%3A0xa6e9b2ff922843e7!2sBHARATH%20TEXTILS!5e0!3m2!1sen!2sin!4v1711620000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                         ></iframe>
                         <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                             <a 
                                href="https://www.google.com/maps/place/BHARATH+TEXTILS/@12.5410205,78.3587249,21z/data=!4m6!3m5!1s0x3bac4bf65acbfa91:0xa6e9b2ff922843e7!8m2!3d12.5411413!4d78.35884!16s%2Fg%2F11ghpzc2b4?hl=en&entry=ttu" 
                                target="_blank" 
                                rel="noreferrer"
                                className="btn-premium"
                                style={{ width: '100%', justifyContent: 'center' }}
                             >
                                Get Directions <MapPin size={18} />
                             </a>
                         </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .icon-badge {
                   width: 50px;
                   height: 50px;
                   background: var(--primary);
                   border-radius: 12px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   flex-shrink: 0;
                }

                .social-icon {
                   width: 45px;
                   height: 45px;
                   border: 1px solid rgba(255,255,255,0.1);
                   border-radius: 50%;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   cursor: pointer;
                   transition: 0.3s ease;
                   color: rgba(255,255,255,0.6);
                }

                .social-icon:hover {
                   background: var(--primary);
                   color: #000;
                   border-color: var(--primary);
                   transform: translateY(-5px);
                }

                @media (max-width: 768px) {
                   .section-padding { padding: 4rem 1.5rem; }
                }
            `}</style>
        </section>
    );
};

export default Location;
