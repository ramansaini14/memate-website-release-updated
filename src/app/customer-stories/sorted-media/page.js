import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function sortedmediaStory() {
    return (
        <>
            <Helmet>
                <title>Sorted Media - Customer Success Story | Memate</title>
                <meta name="description" content="Learn how Sorted Media transformed their business operations with Memate's comprehensive business management software." />
            </Helmet>
            
            <div className="customer-story-page">
                <div className="container">
                    <div className="hero-section">
                        <h1>Sorted Media Success Story</h1>
                        <p className="lead">Discover how Sorted Media leveraged Memate to streamline operations and boost productivity.</p>
                    </div>
                    
                    <div className="story-content">
                        <section className="challenge">
                            <h2>The Challenge</h2>
                            <p>Sorted Media faced significant operational challenges before implementing Memate...</p>
                        </section>
                        
                        <section className="solution">
                            <h2>The Solution</h2>
                            <p>With Memate's comprehensive business management platform, Sorted Media was able to...</p>
                        </section>
                        
                        <section className="results">
                            <h2>The Results</h2>
                            <div className="metrics">
                                <div className="metric">
                                    <h3>50%</h3>
                                    <p>Reduction in administrative tasks</p>
                                </div>
                                <div className="metric">
                                    <h3>30%</h3>
                                    <p>Increase in operational efficiency</p>
                                </div>
                                <div className="metric">
                                    <h3>25%</h3>
                                    <p>Time savings on project management</p>
                                </div>
                            </div>
                        </section>
                        
                        <section className="cta">
                            <h2>Ready to Transform Your Business?</h2>
                            <p>See how Memate can help your business achieve similar results.</p>
                            <a href="/contact-us" className="btn btn-primary">Get Started Today</a>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}