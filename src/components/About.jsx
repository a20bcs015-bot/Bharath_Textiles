import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative' }}
                    >
                        <div className="img-frame">
                            <img
                                src="/assets/logo_shop.jpg"
                                alt="Bharath Textiles Brand"
                                style={{ width: '100%', height: 'auto', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                            />
                        </div>
                        <div className="brand-card">
                            <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>TEENPEOPLE</span>
                            <p style={{ opacity: 0.7, fontSize: '0.8rem' }}>Exclusive Retailer</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="heading" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
                            A Heritage of <span className="text-gradient">Quality</span> & Style
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '2rem' }}>
                            At Bharath Textiles, we believe that fashion is a language. Founded by **V BHARATH**, our vision is to bring premium shirting and ethnic wear to the modern individual. We curate every fabric with precision and care.
                        </p>

                        <div className="owner-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src="/assets/owner.png" alt="V BHARATH" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }} />
                            <div>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '0.2rem' }}>V BHARATH</h4>
                                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Founder & Proprietor</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h3 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 800 }}>3</h3>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Years of Excellence</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 800 }}>1k+</h3>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Happy Customers</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style>{`
                .img-frame {
                    position: relative;
                    z-index: 1;
                }
                
                .img-frame::after {
                    content: '';
                    position: absolute;
                    top: -20px;
                    left: -20px;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--primary);
                    border-radius: 30px;
                    z-index: -1;
                    opacity: 0.3;
                }

                .brand-card {
                   position: absolute;
                   bottom: -30px;
                   right: -20px;
                   background: #fff;
                   color: #000;
                   padding: 2rem;
                   border-radius: 20px;
                   box-shadow: 0 15px 30px rgba(0,0,0,0.2);
                   z-index: 10;
                   animation: float 4s ease-in-out infinite;
                }

                @keyframes float {
                   0%, 100% { transform: translateY(0); }
                   50% { transform: translateY(-10px); }
                }

                @media (max-width: 768px) {
                   .brand-card {
                      position: static;
                      margin-top: 1rem;
                      text-align: center;
                   }
                   .img-frame::after {
                      display: none;
                   }
                }
            `}</style>
        </section>
    );
};

export default About;
