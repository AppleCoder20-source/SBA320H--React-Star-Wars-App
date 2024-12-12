export default function StarShipCards({ship}) {
        const loaded = () => {
            return (
              <div className = "Ships">
                <h1>{ship.name}</h1>
                <h2>{ship.model}</h2>
                <h2>{ship.passengers}</h2>
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