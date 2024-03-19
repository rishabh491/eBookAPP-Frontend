import React, { useState } from 'react';

import Header from './Header';
import Layout from './Layout';

const { Content } = Layout;

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const handleToggleAnswer = (questionId) => {
    setShowAnswer((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId]
    }));
  };

  return (
    <Layout>
      
        <section>
          <h1 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem', textDecoration: 'underline', textDecorationOffset: '8px' }}>Question in mind?</h1>
          <div id="accordion-flush">
            <div>
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  style={{ width: '100%', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.25rem', color: '#333', fontWeight: '500', borderBottom: '1px solid #ccc' }}
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                  onClick={() => handleToggleAnswer('accordion-flush-body-1')}
                >
                  <span style={{ fontSize: '1.25rem', color: '#374151' }}>Why should I use CodeBook?</span>
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: 'currentColor', width: '1.5rem', height: '1.5rem' }}
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </h2>
              {showAnswer['accordion-flush-body-1'] && (
                <div style={{ padding: '1rem', background: '#f0f0f0', border: '1px solid #ccc', marginTop: '0.5rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus ac elit fermentum fringilla nec in enim. Mauris sed posuere massa. Nullam vel metus nec lectus hendrerit bibendum. Vivamus sed risus enim. Phasellus tincidunt nulla sed nibh vestibulum, a tincidunt nulla tincidunt. Nulla nec libero et eros lacinia vehicula. Nam at metus at sapien volutpat ultrices sed vel sem. Proin ut dolor urna. Aenean scelerisque tellus sit amet turpis lacinia bibendum. Maecenas sed magna nunc. Nulla facilisi. Vivamus sit amet enim dapibus, placerat justo a, vehicula leo. Curabitur vel augue at dui tristique posuere. Mauris convallis lacinia eros, et condimentum leo pharetra vel. Aenean nec mi ac lacus fermentum tincidunt a vel libero.
                </div>
              )}
            </div>
            <div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  style={{ width: '100%', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.25rem', color: '#333', fontWeight: '500', borderBottom: '1px solid #ccc' }}
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-2"
                  onClick={() => handleToggleAnswer('accordion-flush-body-2')}
                >
                  <span style={{ fontSize: '1.25rem', color: '#374151' }}>Can I access my eBook on mobile?</span>
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: 'currentColor', width: '1.5rem', height: '1.5rem' }}
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </h2>
              {showAnswer['accordion-flush-body-2'] && (
                <div style={{ padding: '1rem', background: '#f0f0f0', border: '1px solid #ccc', marginTop: '0.5rem' }}>
                  Sed id tellus ac elit fermentum fringilla nec in enim. Mauris sed posuere massa. Nullam vel metus nec lectus hendrerit bibendum. Vivamus sed risus enim. Phasellus tincidunt nulla sed nibh vestibulum, a tincidunt nulla tincidunt. Nulla nec libero et eros lacinia vehicula. Nam at metus at sapien volutpat ultrices sed vel sem. Proin ut dolor urna. Aenean scelerisque tellus sit amet turpis lacinia bibendum. Maecenas sed magna nunc. Nulla facilisi. Vivamus sit amet enim dapibus, placerat justo a, vehicula leo. Curabitur vel augue at dui tristique posuere. Mauris convallis lacinia eros, et condimentum leo pharetra vel. Aenean nec mi ac lacus fermentum tincidunt a vel libero.
                </div>
              )}
            </div>
            <div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  style={{ width: '100%', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.25rem', color: '#333', fontWeight: '500', borderBottom: '1px solid #ccc' }}
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-3"
                  onClick={() => handleToggleAnswer('accordion-flush-body-3')}
                >
                  <span style={{ fontSize: '1.25rem', color: '#374151' }}>Do you offer refunds?</span>
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: 'currentColor', width: '1.5rem', height: '1.5rem' }}
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </h2>
              {showAnswer['accordion-flush-body-3'] && (
                <div style={{ padding: '1rem', background: '#f0f0f0', border: '1px solid #ccc', marginTop: '0.5rem' }}>
                  Phasellus tincidunt nulla sed nibh vestibulum, a tincidunt nulla tincidunt. Nulla nec libero et eros lacinia vehicula. Nam at metus at sapien volutpat ultrices sed vel sem. Proin ut dolor urna. Aenean scelerisque tellus sit amet turpis lacinia bibendum. Maecenas sed magna nunc. Nulla facilisi. Vivamus sit amet enim dapibus, placerat justo a, vehicula leo. Curabitur vel augue at dui tristique posuere. Mauris convallis lacinia eros, et condimentum leo pharetra vel. Aenean nec mi ac lacus fermentum tincidunt a vel libero. Sed id tellus ac elit fermentum fringilla nec in enim. Mauris sed posuere massa. Nullam vel metus nec lectus hendrerit bibendum. Vivamus sed risus enim.
                </div>
              )}
            </div>
            <div>
              <h2 id="accordion-flush-heading-4">
                <button
                  type="button"
                  style={{ width: '100%', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.25rem', color: '#333', fontWeight: '500', borderBottom: '1px solid #ccc' }}
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-4"
                  onClick={() => handleToggleAnswer('accordion-flush-body-4')}
                >
                  <span style={{ fontSize: '1.25rem', color: '#374151' }}>Do you support International payments?</span>
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: 'currentColor', width: '1.5rem', height: '1.5rem' }}
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </h2>
              {showAnswer['accordion-flush-body-4'] && (
                <div style={{ padding: '1rem', background: '#f0f0f0', border: '1px solid #ccc', marginTop: '0.5rem' }}>
                  Curabitur vel augue at dui tristique posuere. Mauris convallis lacinia eros, et condimentum leo pharetra vel. Aenean nec mi ac lacus fermentum tincidunt a vel libero. Sed id tellus ac elit fermentum fringilla nec in enim. Mauris sed posuere massa. Nullam vel metus nec lectus hendrerit bibendum. Vivamus sed risus enim. Phasellus tincidunt nulla sed nibh vestibulum, a tincidunt nulla tincidunt. Nulla nec libero et eros lacinia vehicula. Nam at metus at sapien volutpat ultrices sed vel sem. Proin ut dolor urna. Aenean scelerisque tellus sit amet turpis lacinia bibendum. Maecenas sed magna nunc. Nulla facilisi. Vivamus sit amet enim dapibus, placerat justo a, vehicula leo.
                </div>
              )}
            </div>
          </div>
        </section>
     
    </Layout>
  );
}

export default FAQ;
