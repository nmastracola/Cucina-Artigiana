import React, { Component } from 'react';

//STYLING
import './about.css'
import david from  '../../media/david.jpg'
import gui from '../../media/gui.jpg'
import spread from '../../media/spread.JPG'

class About extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <div className="title-wrapper ">
                    <h1 className="title">About Us</h1>
                </div>
                <div className="outer">
                <div className="about-container">
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugiat non pariatur qui quo recusandae sed, voluptatibus! Quidem, rem, tempora? Accusantium architecto consequuntur delectus ducimus, maxime pariatur rem sequi vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat impedit labore, numquam odit quibusdam quidem quo recusandae vero voluptas. Ipsum, odit quaerat? Blanditiis, doloremque esse illum nihil perspiciatis quae quibusdam.</p>
                    <img src={spread} alt="spread" className="spread" />
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam animi aperiam consequatur deserunt doloremque et ex facilis fuga fugiat hic inventore libero nisi, obcaecati perspiciatis repellendus reprehenderit sint voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus dolor eos eveniet iusto magnam obcaecati! Aliquid blanditiis dolores error libero molestiae natus nesciunt odio repellendus tempora totam? Quas, quasi?</p>
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto asperiores corporis deserunt dolorem eum expedita, ipsam laboriosam magnam necessitatibus nihil nisi officiis qui repellendus veritatis voluptatem. Ea, officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus, facere nihil nobis possimus quibusdam tempora vitae! Aliquam aspernatur, esse excepturi facilis fuga ipsum nihil nostrum, pariatur possimus, provident rerum.</p>
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa laboriosam laborum maiores mollitia officia quod. Asperiores atque dolorum ducimus eos hic, magni maiores modi nemo quibusdam recusandae suscipit totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa harum modi non odio optio pariatur praesentium sint. Enim, explicabo, recusandae. Cumque, distinctio illo nam optio quo saepe tempora. Odit.</p>
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius explicabo iusto omnis tempore totam. Alias doloremque labore neque nesciunt nihil nobis, praesentium quis quisquam similique sit temporibus, veniam vero voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, asperiores atque commodi culpa cum debitis deleniti dicta est ipsa iusto magnam officiis, optio qui rem sapiente ut velit voluptatem voluptatibus.</p>
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto at dolor illum impedit libero molestiae necessitatibus quaerat saepe. Asperiores eum ex hic impedit magni mollitia repellendus temporibus voluptate? Nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, architecto at, deserunt dignissimos dolorum eaque error est, eveniet ex expedita fugit illo inventore labore necessitatibus nobis odit omnis quidem quisquam!</p>
                </div>
                </div>
                <div className="divider"></div>
                <div className="title-wrapper">
                    <h1 className="title"> Our Staff </h1>
                </div>
                <div className="people-container">
                    <div className="person">
                        <div className="person-wrapper">
                        <h1 className="name">Giuseppe Mastrantonio</h1>
                        <h1 className="work-title">Head Chef</h1>
                        <img src={gui} alt="gui" className="about-pic"/>
                        <p>Pasta ipsum dolor sit amet manicotti trennette radiatori lasagne tagliatelle fusilli lunghi lasagnette pennette tuffoli mezze penne fettucelle sorprese mafaldine. Fusilli bucati linguettine lanterne orzo tortellini tortiglioni capelli d'angelo rotini spiralini. Lanterne manicotti conchiglie mafalde cavatappi pennoni tortellini rigatoncini. Scialatelli gnocchi calamaretti cellentani tripoline sacchettoni. Maccheroncelli calamarata bavette tortiglioni orecchiette bavette tripoline.</p>
                        </div>
                    </div>
                    <div className="person">
                        <div className="person-wrapper">
                        <h1 className="name">David Nicholas</h1>
                        <h1 className="work-title">Distribution and Logistics</h1>
                        <img src={david} alt="david" className="about-pic"/>
                        <p>Pasta ipsum dolor sit amet casarecce tortelloni manicotti marziani trofie. Vermicelloni orecchiette trenette acini di pepe tortelloni. Stringozzi gnocchi trenne mezzelune lanterne. Tortellini fusilli gnocchi farfalle fusilli lunghi radiatori tortelloni. Mezzani pasta mostaccioli garganelli cavatappi capellini penne lisce. Fiorentine pici vermicelli casarecce mafalde spaghetti capellini gomito lanterne cellentani cencioni taglierini spiralini.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
