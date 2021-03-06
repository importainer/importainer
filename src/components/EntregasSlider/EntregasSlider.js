import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { usersMoq } from './moq';
import './EntregasSlider.css';

export default function EntregasSlider() {

    const [testDb, setTestDb] = useState([]);

    const order = (a, b) => {

        if (a < b) return 1

        else if (a > b) return -1

        else return 0

    }

    useEffect(() => {

        getDocs(collection(db, 'testimoniosBackup'))
            .then(tbl => {

                const config = tbl.docs.filter(e => e.data().hasOwnProperty("config"));

                const { desde, hasta } = config[0].data().config;

                const filterTesti = tbl.docs.filter(e => e.data().chekedDB !== false && !e.data().hasOwnProperty("config"));

                const orderTesti = filterTesti.sort((a, b) => order(a.data().rating, b.data().rating));

                const testiRang = orderTesti.filter(e => e.data().rating >= desde && e.data().rating <= hasta);

                const testMayor = orderTesti.filter(e => e.data().rating >= hasta);

                const testMenor = orderTesti.filter(e => e.data().rating <= desde);

                if (testiRang.length > 10) {

                    const arr = [];

                    while (arr.length < 10) {

                        const testimonioSelect = testiRang[Math.floor(Math.random() * testiRang.length)].data();

                        if(arr.length === 0) {
                            
                            arr.push(testimonioSelect);

                        } else {

                            const recorridoArr = arr.find(e => e.idInterno === testimonioSelect.idInterno);

                            if(recorridoArr === undefined) {
                                
                                arr.push(testimonioSelect);
    
                            }

                        }
                        
                    }

                    setTestDb(arr);

                } else {

                    setTestDb(orderTesti.map(e => e.data()));

                }

            })
            .catch(e => console.log(e, 'error'))

    }, []);

    // if(usersMoq.length >= 10) {

    //     while (testRandom.length < 10) {

    //         testRandom.push(usersMoq[Math.floor(Math.random() * usersMoq.length)]);

    //     }

    // } else {

    //     usersMoq.forEach(e => testRandom.push(e));

    // }
    // console.log(testDb, 'asdasd')

    setTimeout(() => {

        const repeat = true;
        const noArrows = false;
        const noBullets = false;
        const interval = true;


        const container = document?.querySelector('.slider-container');
        var slide = document?.querySelectorAll('.slider-single');
        var slideTotal = slide.length - 1;
        var slideCurrent = -1;

        function initBullets() {
            if (noBullets) {
                return;
            }
            const bulletContainer = document?.createElement('div');
            bulletContainer?.classList.add('bullet-container')
            slide.forEach((elem, i) => {

                const bullet = document?.createElement('div');
                bullet?.classList.add('bullet')
                bullet.id = `bullet-index-${i}`
                bullet?.addEventListener('click', () => {

                    goToIndexSlide(i);

                })
                bulletContainer?.appendChild(bullet);
                elem?.classList.add('proactivede');

            })
            container?.appendChild(bulletContainer);
        }

        function initArrows() {
            if (noArrows) {
                return;
            }
            const leftArrow = document?.createElement('a')
            const iLeft = document?.createElement('i');
            iLeft?.classList.add('fa')
            iLeft?.classList.add('fa-arrow-left')
            leftArrow?.classList.add('slider-left')
            leftArrow?.appendChild(iLeft)
            leftArrow?.addEventListener('click', () => {
                slideLeft();
            })
            const rightArrow = document?.createElement('a')
            const iRight = document?.createElement('i');
            iRight?.classList.add('fa')
            iRight?.classList.add('fa-arrow-right')
            rightArrow?.classList.add('slider-right')
            rightArrow?.appendChild(iRight)
            rightArrow?.addEventListener('click', () => {
                slideRight();
            })
            container?.appendChild(leftArrow);
            container?.appendChild(rightArrow);
        }

        function slideInitial() {
            initBullets();
            initArrows();
            setTimeout(function () {
                slideRight();
            }, 500);

            interval ? setInterval(() => slideRight(), 7000) : slideRight();
        }

        function updateBullet() {
            if (!noBullets) {
                document?.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
                    elem?.classList.remove('active');
                    if (i === slideCurrent) {
                        elem?.classList.add('active');
                    }
                })
            }
            checkRepeat();
        }

        function checkRepeat() {
            if (!repeat) {
                if (slideCurrent === slide.length - 1) {
                    slide[0]?.classList.add('not-visible');
                    slide[slide.length - 1]?.classList.remove('not-visible');
                    if (!noArrows) {
                        document?.querySelector('.slider-right').classList.add('not-visible')
                        document?.querySelector('.slider-left').classList.remove('not-visible')
                    }
                }
                else if (slideCurrent === 0) {
                    slide[slide.length - 1]?.classList.add('not-visible');
                    slide[0]?.classList.remove('not-visible');
                    if (!noArrows) {
                        document?.querySelector('.slider-left').classList.add('not-visible')
                        document?.querySelector('.slider-right').classList.remove('not-visible')
                    }
                } else {
                    slide[slide.length - 1]?.classList.remove('not-visible');
                    slide[0]?.classList.remove('not-visible');
                    if (!noArrows) {
                        document?.querySelector('.slider-left').classList.remove('not-visible')
                        document?.querySelector('.slider-right').classList.remove('not-visible')
                    }
                }
            }
        }

        function slideRight() {
            if (slideCurrent < slideTotal) {
                slideCurrent++;
            } else {
                slideCurrent = 0;
            }

            if (slideCurrent > 0) {
                var preactiveSlide = slide[slideCurrent - 1];
            } else {
                var preactiveSlide = slide[slideTotal];
            }
            var activeSlide = slide[slideCurrent];
            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide[slideCurrent + 1];
            } else {
                var proactiveSlide = slide[0];

            }

            slide.forEach((elem) => {
                var thisSlide = elem;
                if (thisSlide?.classList.contains('preactivede')) {
                    thisSlide?.classList.remove('preactivede');
                    thisSlide?.classList.remove('preactive');
                    thisSlide?.classList.remove('active');
                    thisSlide?.classList.remove('proactive');
                    thisSlide?.classList.add('proactivede');
                }
                if (thisSlide?.classList.contains('preactive')) {
                    thisSlide?.classList.remove('preactive');
                    thisSlide?.classList.remove('active');
                    thisSlide?.classList.remove('proactive');
                    thisSlide?.classList.remove('proactivede');
                    thisSlide?.classList.add('preactivede');
                }
            });
            preactiveSlide?.classList.remove('preactivede');
            preactiveSlide?.classList.remove('active');
            preactiveSlide?.classList.remove('proactive');
            preactiveSlide?.classList.remove('proactivede');
            preactiveSlide?.classList.add('preactive');

            activeSlide?.classList.remove('preactivede');
            activeSlide?.classList.remove('preactive');
            activeSlide?.classList.remove('proactive');
            activeSlide?.classList.remove('proactivede');
            activeSlide?.classList.add('active');

            proactiveSlide?.classList.remove('preactivede');
            proactiveSlide?.classList.remove('preactive');
            proactiveSlide?.classList.remove('active');
            proactiveSlide?.classList.remove('proactivede');
            proactiveSlide?.classList.add('proactive');

            updateBullet();
        }

        function slideLeft() {
            if (slideCurrent > 0) {
                slideCurrent--;
            } else {
                slideCurrent = slideTotal;
            }

            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide[slideCurrent + 1];
            } else {
                var proactiveSlide = slide[0];
            }
            var activeSlide = slide[slideCurrent];
            if (slideCurrent > 0) {
                var preactiveSlide = slide[slideCurrent - 1];
            } else {
                var preactiveSlide = slide[slideTotal];
            }
            slide.forEach((elem) => {
                var thisSlide = elem;
                if (thisSlide?.classList.contains('proactive')) {
                    thisSlide?.classList.remove('preactivede');
                    thisSlide?.classList.remove('preactive');
                    thisSlide?.classList.remove('active');
                    thisSlide?.classList.remove('proactive');
                    thisSlide?.classList.add('proactivede');
                }
                if (thisSlide?.classList.contains('proactivede')) {
                    thisSlide?.classList.remove('preactive');
                    thisSlide?.classList.remove('active');
                    thisSlide?.classList.remove('proactive');
                    thisSlide?.classList.remove('proactivede');
                    thisSlide?.classList.add('preactivede');
                }
            });

            preactiveSlide?.classList.remove('preactivede');
            preactiveSlide?.classList.remove('active');
            preactiveSlide?.classList.remove('proactive');
            preactiveSlide?.classList.remove('proactivede');
            preactiveSlide?.classList.add('preactive');

            activeSlide?.classList.remove('preactivede');
            activeSlide?.classList.remove('preactive');
            activeSlide?.classList.remove('proactive');
            activeSlide?.classList.remove('proactivede');
            activeSlide?.classList.add('active');

            proactiveSlide?.classList.remove('preactivede');
            proactiveSlide?.classList.remove('preactive');
            proactiveSlide?.classList.remove('active');
            proactiveSlide?.classList.remove('proactivede');
            proactiveSlide?.classList.add('proactive');

            updateBullet();
        }

        function goToIndexSlide(index) {
            const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
            while (slideCurrent !== index) {
                sliding();
            }
        }

        slideInitial();

    }, 100);

    // console.log(testDb.sort((a, b) => order(a.rating, b.rating)), 'final')

    return (

        <div className="contenedor" >

            <div className="slider-container">

                <div className="slider-content">

                    {

                        testDb.sort((a, b) => order(a.rating, b.rating)).map((e, i) => {

                            return (

                                <Link to={`/EntregasDetail/${e.idInterno}`} key={e.idInterno} >

                                    <div className="slider-single" key={e.idInterno}>
                                        <img className="slider-single-image" src={e.ent1} alt="1" />
                                        <h1 className="slider-single-title">{e.casa}</h1>
                                        {/* <a className="slider-single-likes" >
                                            <i className="fa fa-heart"></i>
                                            <p>1,247</p>
                                        </a> */}
                                    </div>

                                </Link>

                            )

                        })

                    }

                    {/* <div className="slider-single">
                        <img className="slider-single-image" src="https://picsum.photos/id/974/200/300" alt="2" />
                        <h1 className="slider-single-title">Through the Mountains</h1>
                        <a className="slider-single-likes" >
                            <i className="fa fa-heart"></i>
                            <p>1,247</p>
                        </a>
                    </div>

                    <div className="slider-single">
                        <img className="slider-single-image" src="https://picsum.photos/id/975/200/300" alt="3" />
                        <h1 className="slider-single-title">Through the Mountains</h1>
                        <a className="slider-single-likes" >
                            <i className="fa fa-heart"></i>
                            <p>1,247</p>
                        </a>
                    </div>


                    <div className="slider-single">
                        <img className="slider-single-image" src="https://picsum.photos/id/976/200/300" alt="4" />
                        <h1 className="slider-single-title">Through the Mountains</h1>
                        <a className="slider-single-likes" >
                            <i className="fa fa-heart"></i>
                            <p>1,247</p>
                        </a>
                    </div>


                    <div className="slider-single">
                        <img className="slider-single-image" src="https://picsum.photos/id/977/200/300" alt="5" />
                        <h1 className="slider-single-title">Through the Mountains</h1>
                        <a className="slider-single-likes" >
                            <i className="fa fa-heart"></i>
                            <p>1,247</p>
                        </a>
                    </div>

                    <div className="slider-single">
                        <img className="slider-single-image" src="https://picsum.photos/id/978/200/300" alt="6" />
                        <h1 className="slider-single-title">Through the Mountains</h1>
                        <a className="slider-single-likes" >
                            <i className="fa fa-heart"></i>|1
                            <p>1,247</p>
                        </a>
                    </div> */}
                </div>
            </div>

        </div>

    )

}