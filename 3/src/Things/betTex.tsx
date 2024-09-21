    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Container, Row, Col, Card } from 'react-bootstrap'; ///IT SAYS IT AN ERROR BUT IT WORKS IDK WHY

    const BetTex = () => {//////THIS IS A SET OF UPCOMING SPORTS EVENTS USING BOOTSTRAP

        return (
            <div>
                <h1 style={{ fontSize: '80px', fontFamily: 'Times New Roman' }}>
                    {'UP COMING GAMBLING EVENTS'}
                </h1>
    <div class="container">
  <div class="row">
    <div class="col-sm"style={{ border: '2px solid black', padding: '10px' }}>
                            ONE
                            <div class="card" style={{ width: '25rem', backgroundColor: 'red' }}>
            <h2>ELON WORM ATREDIES VS RFK JUNIOR THE 7TH AT CANCER CITY </h2>
            <img src="https://pics.craiyon.com/2023-11-20/J_1WdfbISyC7SiJXoE0h0Q.webp" class="card-img-top" alt="..." />
            </div>
                        </div>
    <div class="col-sm" style={{ border: '2px solid black', padding: '10px' }}>
                            TWO
                            <div class="card" style={{ width: '25rem', backgroundColor: 'red' }}>
            <h2>FORMER WORLD CHESS CHAMPION AND SOVIET INTERNATION CHESS GRANDMASTER ANATOLY KARPOV VS A THREE YEAR OLD FOR WHATEVER REASON, DEFINITELY NOT TO StROKE HIS EGO</h2>
            <img src="https://i.ytimg.com/vi/iCG5lVDZWmc/maxresdefault.jpg" class="card-img-top" alt="..." />
            </div>
                        </div>
    <div class="col-sm" style={{ border: '2px solid black', padding: '10px' }}>
                            THREE
                            <div class="card" style={{ width: '25rem', backgroundColor: 'red' }}>
            <h2>ELDERLY GLADIATOR WORLD CUP </h2>
            <img src="https://st2.depositphotos.com/1912933/7560/i/380/depositphotos_75608939-stock-photo-old-angry-woman-threatening-with.jpg" class="card-img-top" alt="..." />
            </div>
                        </div>
                    </div>
  



                    </div>
                </div>
    
        );
    
    }


export default BetTex;