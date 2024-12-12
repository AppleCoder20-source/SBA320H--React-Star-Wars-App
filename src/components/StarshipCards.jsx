export default function StarShipCards({ship}) {
        const loaded = () => {
          return (
            <div className="starship-card">
              <h2 className="starship-name">
              Ship: {ship.name}</h2>
            <p>Model: {ship.model}</p>
              <p>Manufacturer: {ship.manufacturer}</p>
            </div>
          );
        
          };
        
          // Function to return loading JSX
          const loading = () => {
            return <h1>No Ships to Display</h1>;
          };
        
          // Ternary operator will determine which functions JSX we will return
          return ship ? loaded() : loading();
        }