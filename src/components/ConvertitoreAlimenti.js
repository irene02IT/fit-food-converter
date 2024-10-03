import { useState } from 'react';

const alimenti = {
    pasta: { rapporto: 1, caloriePerGrammo: 4 },
    riso: { rapporto: 1, caloriePerGrammo: 4 },
    pane: { rapporto: 1.5, caloriePerGrammo: 4 },
    patate: { rapporto: 3, caloriePerGrammo: 4 },
    gnocchi: { rapporto: 2.5, caloriePerGrammo: 4 },
    farina: { rapporto: 1, caloriePerGrammo: 4 },
    quinoa: { rapporto: 1, caloriePerGrammo: 4 },
    farro: { rapporto: 1, caloriePerGrammo: 4 },
    orzo: { rapporto: 1, caloriePerGrammo: 4 },
    grano_saraceno: { rapporto: 1, caloriePerGrammo: 4 },   
    avena: { rapporto: 1, caloriePerGrammo: 4 },
    kamut: { rapporto: 1, caloriePerGrammo: 4 },
    miglio: { rapporto: 1, caloriePerGrammo: 4 },
    amaranto: { rapporto: 1, caloriePerGrammo: 4 },
    cous_cous: { rapporto: 1, caloriePerGrammo: 4 },
    segale: { rapporto: 1, caloriePerGrammo: 4 },
    polenta: { rapporto: 1, caloriePerGrammo: 4 },
  };

function ConvertitoreAlimenti() {
    const [quantità, setQuantità] = useState('');
    const [alimentoX, setAlimentoX] = useState('riso');
    const [alimentoY, setAlimentoY] = useState('pasta');
    const [risultato, setRisultato] = useState(null);
  
    const converti = () => {
      const rapportoX = alimenti[alimentoX].rapporto;
      const rapportoY = alimenti[alimentoY].rapporto;

        // Conversione della quantità
        const conversioneQuantità = (quantità * rapportoX) / rapportoY;
  
      // Calcolo calorie
      const calorie = conversioneQuantità * alimenti[alimentoX].caloriePerGrammo;
  
      setRisultato({
        conversioneQuantità: conversioneQuantità.toFixed(2),
        calorieTotali: calorie.toFixed(2),
      });
    };
  
    return (
      <div className="container">
        <h1>Convertitore alimenti</h1>
        <div>
          <label>Quantità (g):</label>
          <input
            type="number"
            value={quantità}
            onChange={(e) => {
                setQuantità(e.target.value);
                setRisultato(null);
            }}
          />
        </div>
        <div>
          <label>Da:</label>
          <select
            value={alimentoX}
            onChange={(e) => {
                setAlimentoX(e.target.value);
                setRisultato(null);
            }}
          >
            {Object.keys(alimenti).map((alimento) => (
              <option key={alimento} value={alimento}>
                {alimento}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>A:</label>
          <select
            value={alimentoY}
            onChange={(e) => {
              setAlimentoY(e.target.value);
              setRisultato(null);
            }}
          >
            {Object.keys(alimenti).map((alimento) => (
              <option key={alimento} value={alimento}>
                {alimento}
              </option>
            ))}
          </select>
        </div>
        <button onClick={converti}>Converti</button>
        {risultato && (
          <div className="result">
            <p>{quantità}g di {alimentoX} corrispondono a {risultato.conversioneQuantità}g di {alimentoY}</p>
            <p>Calorie (circa): {risultato.calorieTotali} kcal</p>
          </div>
        )}
      </div>
    );
  }
  
  export default ConvertitoreAlimenti;
  
