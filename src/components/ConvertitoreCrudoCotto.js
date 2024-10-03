import React, { useState } from 'react';

const alimenti = {
    riso_rosso: { rapporto: 2 },
    pasta: { rapporto: 1.92},
    riso_basmati: { rapporto: 2 },
    riso_classico: { rapporto: 2.2 },
    quinoa: { rapporto: 2.6 },
    orzo: { rapporto: 2.35 }
};

const ConvertitoreCrudoCotto = () => {
    const [rawWeight, setRawWeight] = useState('');
    const [cookedWeight, setCookedWeight] = useState(null);
    const [food, setFood] = useState('riso_rosso');

    const handleConvert = () => {
        const conversionFactor = alimenti[food].rapporto;
        const result = rawWeight * conversionFactor;
        setCookedWeight(result);
    };

    return (
        <div className='container'>
            <h1>Convertitore da Cibo Crudo a Cotto</h1>
            <div>
            <label>Da:</label>
                <select
                    value={food}
                    onChange={(e) => {
                        setFood(e.target.value);
                        setCookedWeight(null);
                    }}
                >
                    {Object.keys(alimenti).map((alimento) => (
                    <option key={alimento} value={alimento}>
                        {alimento}
                    </option>
                    ))}
                </select>
            </div>
            <input
                type="number"
                value={rawWeight}
                onChange={(e) => setRawWeight(e.target.value)}
                placeholder="Peso crudo in grammi"
            />
            <button onClick={handleConvert}>Converti</button>
                {cookedWeight !== null && (
                <div className='result'>
                    <p>Peso cotto: {cookedWeight.toFixed(2)} grammi</p>
                </div>
                )}
        </div>
    );
};

export default ConvertitoreCrudoCotto;