//METHODS

jQuery.fn.isHovered = function() {
    return $(this).filter(":hover").length > 0
}

$(document).ready(function(){

    //INIT

    const Articles = [
        [
            ["statuette.jpg"],
            ["La Statuette de Khéops"],
            [
                [["Son origine"],["La statuette de Khéops est une statue égyptienne découverte en 1903 à Abydos, en Egypte.\nCette statuette a une très grande valeur historique et archéologique. Elle représente, comme son nom l’indique, le grand Kéops, roi de la IVème dynastie et bâtisseur de la Grande pyramide.\nUn débat subsiste encore quant à la datation de la statuette. L’hypothèse la plus partagée veut que la statuette date de l’Ancien Empire, cette hypothèse n’est toutefois pas partagée par l’égyptologue Zahi Hawass ne pense pas que la statuette date de l’Ancien Empire.\nL’artiste à l'origine de la statuette est inconnu,"]],
                [["Rituel"],["Le type de rituel associé à cette statuette dépend de sa datation et est également soumis à débat. Si elle était contemporaine de Khéops, elle faisait partie soit du culte traditionnel de la statue, soit du culte mortuaire. Si la figurine est d'une période plus tardive, elle servait probablement (comme l'affirme Hawass) d'offrande votive"]],
                [["Une statuette unique"],["La statuette de Khéops est aujourd’hui en très bon état, elle est même quasiment intacte (relativement à son âge). C’est une aubaine car elle se trouve être la seule représentation tridimensionnelle découverte à ce jour.\nLa statuette représentant Khéops avec la couronne rouge, est entièrement faite d’ivoire, et mesure environ 7,5 cm de haut, 2,9 cm de long et environ 2,6 cm de ARRge. \n\nLe roi est assis sur un trône en grande partie non décoré et au dossier bas. Dans sa main droite, qui est placée sur sa poitrine, il tient un fléau contre son épaule droite, le fléau reposant sur le haut de son bras. Son bras gauche est plié, l'avant-bras reposant sur la cuisse gauche. Sa main gauche est ouverte, la paume reposant sur son genou gauche. Ses pieds se sont brisés, ainsi que le piédestal. La couronne rouge est endommagée - l'arête à l'arrière et la spirale décorative à l'avant se sont brisées. Sa tête est légèrement disproportionnée par rapport à son corps, avec de grandes oreilles saillantes. Son menton est anguleux et il ne porte pas la barbe cérémonielle pharaonique. Le roi porte un pagne court et plissé et le le haut de son corps est nu."]],
                
            ],
            ['https://fr.wikipedia.org/wiki/Statuette_de_Kh%C3%A9ops', 'https://www.merveilles-du-monde.com/Pyramides-d-Egypte/Kheops.php']
        ],
        [
            ["kheops.jpg"],
            ["La Grande Pyramide"],
            [
                [["Caractéristique"],["La pyramide de Khéops est la première des sept merveilles du monde antique et surtout l’unique des sept à être encore en bonne état et debout. Celle l’une des constructions les plus imposantes construite par les Égyptiens au temps de l'Antiquité. Sur une base parfaitement carrée, elle mesurait à près de 150m de hauteur pour un côté de 230 mètres . À l'heure actuelle, elle est un peu plus petite suite à son usure. Elle a été construite pour être le tombeau du pharaon Khéops qui vivait sous la IVe dynastie, il y a près de 4500 ans.\n\n Cette pyramide est la plus grande de toutes les pyramides jamais construites sur Terre, quelle que soit la civilisation et l'époque. Elle représente donc en cela une curiosité qui amène à se poser des questions sur son architecture, ses méthodes de construction, et les raisons de sa construction. Elle est le tombeau principal de la nécropole dont elle fait partie, sur le plateau de Gizeh, tout près de la capitale de l'Egypte, Le Caire."]],
                [["Théorie sur la construction"],["La construction de la pyramide de Khéops a fait l'objet des théories les plus folles au fil des décennies. Devant cette construction colossale, et en considérant les moyens de l'époque, beaucoup ont suggéré que les bâtisseurs des pyramides aient pu recevoir l'aide des extra-terrestres. Nous pouvons comprendre le doute des gens parce que les exploits de l'ingénierie antique au Caire sont si impressionnants qu'aujourd'hui encore, les scientifiques ne savent pas exactement comment les pyramides ont été construites. En contrepartie, ils ont beaucoup appris sur les personnes qui les ont construites et sur le pouvoir politique nécessaire pour y parvenir.\n\nLes bâtisseurs étaient des ouvriers égyptiens qualifiés et bien nourris qui vivaient dans une ville temporaire proche. Les fouilles archéologiques menées sur ce site fascinant révélèrent une communauté très organisée, riche en ressources, qui devait être soutenue par une autorité centrale forte."]],
                
            ],
            ['https://www.merveilles-du-monde.com/Sept/Pyramide-de-Kheops.php', 'https://www.histoire-et-civilisations.com/thematiques/antiquite/la-grande-pyramide-de-kheops-70957.php', 'https://www.geo.fr/histoire/comment-a-ete-construit-la-pyramide-de-kheops-206733']
        ],
        [
            ["sphinx.jpg"],
            ["Le Sphynx"],
            [
                [["Description"],["Le grand Sphinx est une statue monumentale située sur le plateau de Gizeh, à 450 m au Sud-Est de la grande pyramide de Khéphren. Elle représente un lion à la tête humaine. Le Sphinx de Gizeh est vraiment gigantesque. Il mesure exactement 73m50 de long sur 14m de ARRge et pour une hauteur de 20m22 exactement. Les proportions de la statue sont les vrais proportions d'un corps de lion et d'une tête humaine."]],
                [["Représentation et constructeur"],["Jusqu'à présent, les spécialistes peuvent seulement faire des suppositions. Ce qui est sûr, c'est qu'il a été construit durant la IVe dynastie, vers le XXVIIe siècle avant JC.\n\nDeux arguments tendent à prouver que le Sphinx représente Khéphren.Le premier argument est que le temple bas de son complexe funéraire est très similaire à celui du Sphinx, ils auraient pu tous les deux être construits par le même architecte. De plus, ils sont tous les deux côte à côte, avec les mêmes dimensions. Le second argument réside dans la ressemblance entre les traits du visage du Sphinx et ceux de Khéphren, que l'on voit bien sur certaines statues, mais  le problème avec cet argument, c'est qu'il est subjectif et que tout le monde n'est pas d'accord avec cette ressemblance."]],
                [["Des visions différentes"],["Le Sphinx a été construit par Khéops pour l'égyptologue allemand Rainer Stadelmann. \nIl se base sur la déviation de la chaussée du complexe de Khéphren, qui aurait pu être provoqué par la présence du Sphinx lors de sa construction, ce dernier serait alors avant Khéphren. car il estime que la ressemblance entre le Sphinx est Khéphren et moindre qu'entre le Sphinx et Khéops.\nL'égyptologue Vassil Dobrev, lui, pense que le Sphinx fut construit par Djédefrê et qu'il représente son père, ce serait alors une statue-hommage.\n\nIl faut ensuite savoir que le port de la barbe postiche n'est apparu que sous Khéphren, auparavant on n'avait pas encore inventé cette originalité. Or le Sphinx n'a pas de barbe postiche. Les représentations de pharaons en Sphinx les plus anciennes datent de Djédefrê, le fils aîné de Khéops, prédécesseur de Khéphren. Donc soit cette affirmation est fausse, soit le Sphinx est postérieur à ce pharaon.\nDonc on ignore encore de nos jours qui est le Sphinx et qui il représente, bien que Khéphren soit un bon candidat."]],
                
            ],
            ['https://www.merveilles-du-monde.com/Pyramides-d-Egypte/Sphinx.php', 'https://www.egypte.fr/sphinx-de-gizeh']
        ],
        [
            ["temple.jpg"],
            ["Le temple du Sphinx"],
            [
                [["Origine"], ["Le temple du Sphinx est en fait un temple consacré au dieu Rê, le fameux dieu Soleil des égyptiens. Si on lui a donné ce nom c'est qu'il a été construit juste devant les pattes du Sphinx, la logique voulait donc qu'il lui soit associé. Et pourtant, ce n'est pas le cas.\n\nLe temple du Sphinx ressemble au temple bas de Khéphren et a été construit en même temps, mais cela n'est pas sûr. Il a été construit avec des blocs de calcaire taillés localement et recouvert de granit rose venant d'Assouan. Les murs intérieurs sont en pierre calcaire de Tourah, utilisée également pour les pyramides de Gizeh. Les sols sont parfois recouverts d'albâtre ou même de granite. Certains murs intérieurs sont également recouverts d'albâtre."]],
                [["Utilité"], [`Le temple du Sphinx était construit pour vénérer le Dieu Soleil. Il avait deux porches alignés sur le Soleil levant et couchant, symbolisant les dieux Khépri et Atoum. La cour intérieure contenait probablement un autel dédié au Dieu Rê. La structure interne du temple révèle sa fonction, qui est confirmée par l'histoire que le pharaon Khéphren mettait en avant le culte de Rê pendant son règne.`]],
            ],
            ["https://www.merveilles-du-monde.com/Pyramides-d-Egypte/Temple-du-Sphinx.php", "https://www.pyramid-of-giza.com/fr/sphinx-de-gizeh/"]
        ],
        [
            ["stele.jpg"],
            ["La stèle de Néfertiabet"],
            [
                [["La fille Royale"],["La Stèle de Néfertiabet est un chef-d'œuvre de l'art égyptien qui date de la fin de la XVIIIe dynastie, sois 1336 avant J.C. Cette stèle a été découverte à Mastaba, l’un des cimetières où reposent les rois égyptiens.\nLa stèle représente Néfertiabet, sœur de Khéops et haute fonctionnaire égyptienne qui a exercé la fonction de prêtresses. Pendant la période égyptienne, les prêtresses avaient pour mission d’assouvir les plaisirs charnels des dieux afin d’obtenir leur faveur et leur bénédiction."]],
                [["Composition"],["La stèle est faite de calcaire et représente Néfertiabet assise devant une table d’offrande, vêtue d'une robe en peau de panthère couvrant son épaule et son bras gauche, symbole de sa fonction de prêtresse. Les hiéroglyphes représentant l’ensemble des offrandes, quelle a reçu, comptabilisant entre autres, du pain, de l'encens, et du tissu."]],
                [["L’Egypte et son savoir"],["La stèle est un bel exemple de ce qu’était l'art égyptien à la fin de la XVIIIe dynastie, ce dernier est caractérisé par une représentation réaliste des personnages et un souci du détail aigue. Les traits du visage de Néfertiabet sont délicats et expriment une grande dignité. Les vêtements et les bijoux qu'elle porte sont également détaillés avec précision."]],
            ],
            ['http://louvre-passion.over-blog.com/2016/02/la-stele-de-nefertiabet.html', 'https://collections.louvre.fr/en/ark:/53355/cl010005261']
        ],
        [
            ["reis.png"],
            ["La vallée des Rois"],
            [
                [["L'Origine"], [`La vallée des Rois est située sur la rive occidentale du Nil à hauteur de Thèbes. La vallée est formée d'une faille dans la chaîne Libyque qui débouche sur la vallée du Nil. Dans les temps anciens, la vallée s'appelait "Ta Iset Maat", ce qui signifie "lieu de vérité". Le premier pharaon qui a été enterré dans la vallée des rois était le roi Thoutmôsis Ier, pharaon de la 18ème dynastie.`]],
                [["Les tombes"], [`La Vallée des Rois est l'une des visites incontournables de l'Égypte. Nous avions plus de 60 tombes taillées dans la roche avec divers objets retrouvés à l’intérieur comme des vêtements, des bijoux et même de la nourriture. Ces objets doivent servir au festin d'arrivée dans le nouveau monde d’après leur croyances. Mais malheureusement tous les tombeaux trouvés à l'intérieur sont maintenant au Musée du Caire.`]]
            ],
            ['https://www.linternaute.com/voyage/magazine/1452677-ces-sites-touristiques-ou-il-est-interdit-de-prendre-des-photos/1452973-vallee-des-rois', 'https://www.nationalgeographic.fr/histoire/la-vallee-des-rois-lultime-demeure-des-pharaons-du-nouvel-empire', 'https://mymodernmet.com/fr/vallee-des-rois/']
        ]
    ]


    //PATCHES

    var prctg = 0.756

    $("img").attr("draggable", 'false')

    document.addEventListener('wheel', function(event){
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    }, { passive: false })

    function isFull(){
        return (window.innerWidth == screen.width && (window.innerHeight == screen.height || window.innerHeight+1 == screen.height))
    }

    if(!isFull()){
        $("#forceSize").css('display', "flex")
        zoommable = false
    }

    var resizeData = {
        H: window.innerHeight,W: window.innerWidth,
        HR: (window.innerHeight/1080).toFixed(4),WR: (window.innerWidth/1920).toFixed(4),
        HWR: (window.innerHeight/window.innerWidth).toFixed(4),
        ARR: ((window.innerWidth*window.innerHeight)/(1920*1080)).toFixed(4),
        CE: [window.innerWidth/2, window.innerHeight/2]
    }

    function updateCSSVars(){
        let PHratio = 0; let PWratio = 0;

        if(resizeData.HWR < 0.5625){
            PHratio = ($("#main_landscapeIn").height())/1080
            PWratio = ($("#main_landscapeIn").height()*1.7777)/1920
        }else{
            PHratio = ($("#main_landscapeIn").width()*0.5625)/1080
            PWratio = ($("#main_landscapeIn").width())/1920
        }

        document.documentElement.style.setProperty('--PHratio', PHratio)
        document.documentElement.style.setProperty('--PWratio', PWratio)
        document.documentElement.style.setProperty('--Wratio', resizeData.WR)
        document.documentElement.style.setProperty('--Aratio', resizeData.ARR)
    }
    
    function patchSizing(){

        let newPrctg = 0

        if(resizeData.HWR <= 0.5625){
            newPrctg = prctg*100

            $('#patch').css("background", "linear-gradient(180deg, rgba(168,224,200,1) 0%, rgba(168,224,200,1) "+(newPrctg).toString()+"%, rgba(231,177,78,1) "+(newPrctg).toString()+"%, rgba(231,177,78,1) 100%)")
            $('#patch2').css("background", "linear-gradient(180deg, rgba(143, 193, 170, 1) 0%, rgba(143, 193, 170, 1) "+(newPrctg + 4.8).toString()+"%, rgba(211, 156, 68, 1) "+(newPrctg + 4.8).toString()+"%, rgba(211, 156, 68, 1) 100%)")

        }else{
            newPrctg = prctg*100 - (resizeData.WR*0.75)*100
            $('#patch').css("background", "linear-gradient(180deg, rgba(168,224,200,1) 0%, rgba(168,224,200,1) "+(newPrctg).toString()+"%, rgba(231,177,78,1) "+(newPrctg).toString()+"%, rgba(231,177,78,1) 100%)")
            $('#patch2').css("background", "linear-gradient(180deg, rgba(143, 193, 170, 1) 0%, rgba(143, 193, 170, 1) "+(newPrctg).toString()+"%, rgba(211, 156, 68, 1) "+(newPrctg).toString()+"%, rgba(211, 156, 68, 1) 100%)")
        }
    }

    updateCSSVars()
    patchSizing()

    //var old = {H: window.innerHeight, W: window.innerWidth}
    $(window).on("resize", function(){

        resizeData = {
            H: window.innerHeight, W: window.innerWidth,
            HR: (window.innerHeight/1080).toFixed(4), WR: (window.innerWidth/1920).toFixed(4),
            HWR: (window.innerHeight/window.innerWidth).toFixed(4),
            ARR: ((window.innerWidth*window.innerHeight)/(1920*1080)).toFixed(4),
            CE: [window.innerWidth/2, window.innerHeight/2]
        }

        circleDelay = (resizeData.ARR >= 0.999) ? 750 : Math.round(750/1-resizeData.ARR)

        /*
        if(step >= 2 && step <= 3){
            $("#main_landscape, #patch").css({
                top: "+="+((window.innerHeight - old.H)/2).toString(),
                left: "+="+((window.innerWidth - old.W)/2).toString()
            })
            
            old = {H: window.innerHeight, W: window.innerWidth}
        }
        */

        updateCSSVars()
        patchSizing()

        if(!isFull()){
            $("#forceSize").css('display', "flex")
            if(hasBegun){volumeFade(ambiance, (ambiance.volume).toFixed(2), 0, 400)}
            zoommable = false
        }else{
            if($("#forceSize").css('display') == "flex" && hasBegun){volumeFade(ambiance, (ambiance.volume).toFixed(2), 0.04, 400)}
            $("#forceSize").css('display', "none")
            zoommable = true
        }
    })


    //INTRO

    var hasBegun = false
    var started = false
    var intro = true

    $(document).on("click", function(){
        if(!hasBegun && !started && isFull()){
            started = true
            $("#zerotextBloc").animate({
                opacity: 0
            }, 250, function(){
                $("#zerotextBloc").css("display", "none")
                $("#firsttextBloc").css("display", "flex")
                $("#firsttextBloc").animate({
                    opacity: 1
                }, 250, function(){
                    hasBegun = true
                    volumeFade(ambiance, 0, 0.04, 1000) 
                });
            });
        }  
    })


    //SOUND & AMBIANCE

    const airwhoosh = new Audio("./resources/sounds/airwhoosh.mp3"); airwhoosh.volume = 0.35;
    const doorOpen = new Audio("./resources/sounds/doorOpen.mp3"); doorOpen.volume = 0.1;
    const doorClose = new Audio("./resources/sounds/doorOpen.mp3"); doorClose.volume = 0.1;
    const ambiance = new Audio('./resources/sounds/Arabic.mp3'); ambiance.loop = true; ambiance.volume = 0.3;

    var fade = false

    function volumeFade(audio, from, to, speed){
        clearInterval(fade)

        audio.volume = from
        ambiance.play()

        let way = (to - from)/Math.abs((to - from))
        let step = way*(Math.abs(to - from)/speed)
        let i = 0

        fade = setInterval(() => {
            if(audio.volume + 5*step < 0.0001){audio.volume = 0}else{i += 5; audio.volume += 5*step;}
            if(i >= speed){
                clearInterval(fade)
            }
        }, 5)
    }


    //ZOOM  

    var zoommable = true
    var textDelay = 800
    var step = 1

    function zoom(target, vec, zoomStrength, zoomSpeed, zoomCenter=[0.5, 0.5], callback=false){
        if(intro){airwhoosh.play()}

        let HWRatio = (!$(target).is("img")) ? ($(target).height()/$(target).width()) : 0.5625

        //if(vec == -1){zoomStrength = [zoomStrength*(step - 1), zoomStrength*(step - 1)*HWRatio]}else{zoomStrength = [zoomStrength*step, zoomStrength*step*HWRatio]}
        let zoomStrengthWH = [zoomStrength, zoomStrength*HWRatio]
        let zoomOffset = [(zoomStrengthWH[0]/2), (zoomStrengthWH[1]/2)]

        let tZoomCenter = []

        for(let i=0; i < zoomCenter.length; i++){
            if(zoomCenter[i] < 0.5){
                tZoomCenter[i] = 1 - zoomCenter[i]
            }else{
                tZoomCenter[i] = 0.5 + zoomCenter[i]
            }
        }

        $(target).animate({
            width: "+="+vec*zoomStrengthWH[0]+"px",
            height: "+="+vec*zoomStrengthWH[1]+"px",
            left: "+="+(-vec)*zoomOffset[0]*tZoomCenter[0]+"px",
            top: "+="+(-vec)*zoomOffset[1]*tZoomCenter[1]+"px",
        }, zoomSpeed, function(){
            if(callback){callback()}
        })
    }

    function ZoomfadeOut(target, fadeDelay, ZoomFactor){
        document.documentElement.style.setProperty('--zoomStrength', ZoomFactor);
        $(target).css("animation", "zoomInFadeOut "+fadeDelay+'ms forwards')
    }

    $(document).on("wheel", $("#main_landscape"), function(e){
        let vec = -(e.originalEvent.deltaY/Math.abs(e.originalEvent.deltaY))
        if(vec == -1){return}

        if(hasBegun && zoommable && intro && step < 4){

            zoommable = false

            let zoomStrength = resizeData.HWR < 0.5625 ? 1500*resizeData.HR : 1500*resizeData.WR
            let zoomSpeed = 620
            let zoomCenter = [0.5, 0.992]

            zoom($("#main_landscape"), vec, zoomStrength*step, zoomSpeed, zoomCenter, function(){
                setTimeout(() => {
                    zoommable = true
                }, 500);
            })
            
            zoom($("#patch"), vec, zoomStrength*step, zoomSpeed, zoomCenter)

            switch(step){
                case 1:
                    ZoomfadeOut($("#firsttextBloc"), textDelay, 1.25)
                    setTimeout(() => {
                        $("#firsttextBloc").css("display", "none")
                        $("#secondtextBloc").css("display", "flex")
                        $("#secondtextBloc").animate({
                            opacity: 1,
                        }, 150)
                    }, textDelay);
                    break;
                case 2:
                    ZoomfadeOut($("#secondtextBloc"), textDelay, 1.25)
                    setTimeout(() => {
                        $("#secondtextBloc").css("display", "none")
                    }, textDelay);
                    break;
                case 3:
                    setTimeout(() => {

                        $("#doorContainer").css("display", "flex")
                        $("#main_landscapeIn, #patch2, #doorContainer").animate({
                            opacity: 1
                        }, 150, function(){
                            $("#main_landscape, #patch").css("display", "none")
                            for(let i=0; i<$(".door").length; i++){
                                if($($(".door")[i]).isHovered()){
                                    $($(".door")[i]).mouseover()
                                }
                            }
                            $('#hint').text("🛈 Open a Door"); $('#hint').css("backgroundColor", "#e7e7e7")
                            intro = false
                        });
                    }, zoomSpeed+20);
                    break   
            }

            step += 1
        }
    })


    //DOORS

    $(".door").data("state", false); $(".door").data("timeout", false);


    $(document).on("mouseenter", ".door", function(e){
        if(!$(this).data("state")){
            $(this).data("state", true)
            clearTimeout($(this).data("timeout"))
    
            setTimeout(() => {
                if($(this).find(".doorOpened").css("display") != "block"){
                    doorClose.pause()
                    doorClose.currentTime = 0;
                    doorOpen.play()
                }
    
                $(this).find(".doorOpened").css("display", "block")
                $(this).find(".doorClosed").css("display", "none")
            }, 120);
        }

    })

    $(document).on("mouseleave", ".door", function(e){
        if($(this).is($($(".door")[currentDoorIndex])) && isTransitionning){return}

        setTimeout(() => {
            $(this).find(".doorClosed").css("display", "block")
            $(this).find(".doorOpened").css("display", "none")

            doorOpen.pause()
            doorOpen.currentTime = 0;
            doorClose.play()

        }, 300);

        setTimeout(() => {
            $(this).data("state", false)

            if($(this).isHovered()){
                $(this).mouseenter()
            }
        }, 450);
    })


    //ARTICLE 

    var currentDoorIndex = -1
    var oldDoorIndex = -1
    var isReading = false
    var isTransitionning = false

    function getIndex(item, arr){
        let out = -1

        $(arr).each(function(index){
            if($(item).is($($(arr)[index]))){
                out = index
            }
        })
        return out
    }

    $(document).on("click", ".door", function(e){
        if($(this).data("state") && !isTransitionning && !isReading){
            isTransitionning = true

            $('#hint').css("display", "none")
            $("#articleFrame").css("display", "block")
            
            doorTransi($(this).offset().left + $(this).width()/2, $(this).offset().top + $(this).height()/2)

            setTimeout(() => {
                $("#mainFrame").css("display", "none")
            }, circleDelay);
            
            currentDoorIndex = getIndex($(this), $(".door"))
            
            $(".door").not($($(".door")[currentDoorIndex])).each(function(index){
                $(this).find(".doorClosed").css("display", "block")
                $(this).find(".doorOpened").css("display", "none")
                $(this).data("state", false)
            })

            let sections = []
            let links = []

            for(let i=0; i<Articles[currentDoorIndex][2].length; i++){
                sections.push(articleSection(Articles[currentDoorIndex][2][i]))
            }

            for(let i=0; i<Articles[currentDoorIndex][3].length; i++){
                links.push($("<a class='articleLink' target='_blank' href='"+Articles[currentDoorIndex][3][i]+"'>"+Articles[currentDoorIndex][3][i]+"</a>"))
            }
            
            $("#articleContent").children().remove()

            $("#articleImage").attr("src", "./resources/imgs/"+Articles[currentDoorIndex][0])
            $("#articleTitle").text(Articles[currentDoorIndex][1])
            $("#articleContent").append(sections, '<br/>', links)

            $("#articleBody").scrollTop(0)
        }
    })

    $(document).on('click', '#articleLeaveBtn', function(){
        if(isReading && !isTransitionning){  
            isTransitionning = true       
            radialCropZoom($(".orb"), circleDelay, -1, function(){

                zoom($(".orb"), -1, circleStrenght, circleDelay, [0.5, 0.5], function(){isReading = false; isTransitionning = false})
                oldDoorIndex = currentDoorIndex

                $("#doorContainer").css("pointer-events", "all")
                $("#articleFrame").css("display", "none")
                $("#mainFrame").css("display", "block")
                
                updateCSSVars()

                setTimeout(() => {
                    setTimeout(() => {
                        if(!$($(".door")[oldDoorIndex]).isHovered()){
                            $($(".door")[oldDoorIndex]).find(".doorClosed").css("display", "block")
                            $($(".door")[oldDoorIndex]).find(".doorOpened").css("display", "none")  

                            doorOpen.pause()
                            doorOpen.currentTime = 0
                            doorClose.play()
                        }

                        $($(".door")[oldDoorIndex]).data("timeout", setTimeout(() => {
                            $($(".door")[oldDoorIndex]).data("state", false)
                        }, 300))

                    }, 200);
                }, circleDelay);
            })
        }
    })

    function articleSection(data){
        return $('<div class="articleSection"><span class="articleSubtitle">'+data[0]+'</span><span class="articleSectionContent">'+data[1]+'</span><div/>')
    }


    //ARTICLE TRANSITION

    var circleDelay = (resizeData.ARR >= 0.999) ? 750 : Math.round(750/1-resizeData.ARR)
    var circleStrenght = 0

    let orb = $('<div class="orb" style="top: '+0+'px; left: '+0+'px;"></div>')
    $("#app").append(orb)

    function doorTransi(x, y){
        circleStrenght = 2*Math.max(
            Math.sqrt(Math.pow((x - 0), 2) + Math.pow((y - 0), 2)),
            Math.sqrt(Math.pow((x - window.innerWidth), 2) + Math.pow((y - 0), 2)),
            Math.sqrt(Math.pow((x - 0), 2) + Math.pow((y - window.innerHeight), 2)),
            Math.sqrt(Math.pow((x - window.innerWidth), 2) + Math.pow((y - window.innerHeight), 2))
        )

        $(".orb").css({
            top: y+"px",
            left: x+"px",
            width: "1px",
            height: "1px"
        })

        $("#doorContainer").css("pointer-events", "none")
        
        zoom($(".orb"), 1, circleStrenght, circleDelay)
        setTimeout(() => {
            radialCropZoom($('.orb'), circleDelay, 1, function(){isReading = true; isTransitionning = false;})
        }, circleDelay);
    }

    function radialCropZoom(target, zoomSpeed, vec, callback = false){
        let step = (vec * 100)/zoomSpeed; let i = 0; let In = 0

        if(vec == 1){
            In = 0
            $(target).css("background", "radial-gradient(transparent 0%, black 0%, black 100%)")
        }else if(vec == -1){
            In = 100
            $(target).css("background", "radial-gradient(transparent 100%, black 100%, black 100%)")
        }

        var radial = setInterval(() => {
            i+=5;In+=5*step;
            $(target).css("background", "radial-gradient(transparent "+In+"%, black "+In+"%, black 100%)")
            
            if(i >= zoomSpeed){
                if(callback){callback()}
                clearInterval(radial)
            }
        }, 5);  
    }

}); 