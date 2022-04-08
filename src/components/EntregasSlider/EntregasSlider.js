import React from 'react';
import './EntregasSlider.css';

export default function EntregasSlider() {

    const usersMoq = [

        {

            casa: 'Container Oficina 15M2',
            file: 'https://png.pngtree.com/background/20210710/original/pngtree-full-creative-rectangular-banner-picture-image_978954.jpg',
            idInterno: 0,
            name: 'Norma-0',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://thumbs.dreamstime.com/z/mancha-de-color-morado-rectangular-dibujado-art%C3%ADsticamente-por-las-manos-como-fondo-para-un-dise%C3%B1o-posterior-la-morada-tinta-167314313.jpg',
            idInterno: 1,
            name: 'Maximiliano-1',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 60M2',
            file: 'https://images.vexels.com/media/users/3/76523/raw/76b75739f0d4ab535d88f52b68bd3e7c-textura-rectangular.jpg?w=1800&fmt=webp',
            idInterno: 2,
            name: 'Cintia-2',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://c8.alamy.com/compes/mtwf49/un-alegre-ilustracion-3d-de-color-verde-brillante-y-negro-tubos-rectangulares-horizontales-volando-junto-con-lineas-blancas-en-el-telon-de-fondo-de-color-verde-oscuro-que-ge-mtwf49.jpg?irclickid=wZpzfNTGDxyIUDOyChw06wDZUkGVgZUqUyPez40&irgwc=1&utm_source=123201&utm_campaign=Online%20Tracking%20Link&utm_medium=impact',
            idInterno: 3,
            name: 'Ema Prueba-3',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://previews.123rf.com/images/whitehoune/whitehoune1502/whitehoune150200048/36146476-fondo-arquitect%C3%B3nico-abstracto-hecho-de-paneles-rectangulares-en-colores-elegantes.jpg',
            idInterno: 4,
            name: 'Norma-4',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://png.pngtree.com/background/20210716/original/pngtree-colorful-abstract-rectangular-background-picture-image_1360612.jpg',
            idInterno: 5,
            name: 'Maximiliano-5',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 60M2',
            file: 'https://png.pngtree.com/background/20210716/original/pngtree-colorful-abstract-rectangular-grid-background-picture-image_1360611.jpg',
            idInterno: 6,
            name: 'Cintia-6',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://img.freepik.com/foto-gratis/representaciones-ilustracion-3d-marcos-rectangulares-diseno-concepto_594417-841.jpg?w=2000',
            idInterno: 7,
            name: 'Ema Prueba-7',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://images.freeimages.com/images/large-previews/f2d/rectangular-landscape-color-1625033.jpg',
            idInterno: 8,
            name: 'Norma-8',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://img.freepik.com/vector-gratis/marcos-neon-rectangulares-geometricos-colores-rojo-azul_1017-28449.jpg?w=2000',
            idInterno: 9,
            name: 'Maximiliano-9',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 60M2',
            file: 'https://png.pngtree.com/background/20210716/original/pngtree-colorful-abstract-rectangular-background-picture-image_1360612.jpg',
            idInterno: 10,
            name: 'Cintia-10',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://images.freeimages.com/images/large-previews/f2d/rectangular-landscape-color-1625033.jpg',
            idInterno: 11,
            name: 'Ema Prueba-11',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://c8.alamy.com/compes/mtwf49/un-alegre-ilustracion-3d-de-color-verde-brillante-y-negro-tubos-rectangulares-horizontales-volando-junto-con-lineas-blancas-en-el-telon-de-fondo-de-color-verde-oscuro-que-ge-mtwf49.jpg?irclickid=wZpzfNTGDxyIUDOyChw06wDZUkGVgZUqUyPez40&irgwc=1&utm_source=123201&utm_campaign=Online%20Tracking%20Link&utm_medium=impact',
            idInterno: 12,
            name: 'Norma-12',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://thumbs.dreamstime.com/z/mancha-de-color-morado-rectangular-dibujado-art%C3%ADsticamente-por-las-manos-como-fondo-para-un-dise%C3%B1o-posterior-la-morada-tinta-167314313.jpg',
            idInterno: 13,
            name: 'Maximiliano-13',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 60M2',
            file: 'https://png.pngtree.com/background/20210716/original/pngtree-colorful-abstract-rectangular-background-picture-image_1360612.jpg',
            idInterno: 14,
            name: 'Cintia-14',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

        {

            casa: 'Container Oficina 15M2',
            file: 'https://previews.123rf.com/images/whitehoune/whitehoune1502/whitehoune150200048/36146476-fondo-arquitect%C3%B3nico-abstracto-hecho-de-paneles-rectangulares-en-colores-elegantes.jpg',
            idInterno: 15,
            name: 'Ema Prueba-15',
            testi: 'A todas las personas que esten buscando este tipo de oficina, que se animen a contactarlos a ustedes y adquirir el producto porque es de primerisima calidad',

        },

    ]

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
            
            console.log(activeSlide.classList, 'asdasdasdas')

            updateBullet();
        }

        function goToIndexSlide(index) {
            const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
            while (slideCurrent !== index) {
                sliding();
            }
        }

        slideInitial();

    }, 100)

    return (

        <div className="contenedor" >

            <div className="slider-container">

                <div className="slider-content">

                    {

                        usersMoq.map((e, i) => {

                            if(i < 10) {

                                return (

                                    <div className="slider-single" key={e.idInterno}>
                                        <img className="slider-single-image" src={e.file} alt="1" />
                                        <h1 className="slider-single-title">{e.casa}</h1>
                                        {/* <a className="slider-single-likes" >
                                            <i className="fa fa-heart"></i>
                                            <p>1,247</p>
                                        </a> */}
                                    </div>
    
                                )

                            }

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