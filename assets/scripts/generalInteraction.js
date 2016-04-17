   var markers = [".marker-pucrs",".marker-s2b",".marker-adp", ".marker-ufrgs",".marker-valens",".marker-tu"];
    var arrayLength = markers.length;

    var applyBehaviorToSkill = function(){

                for (var i = 0; i < arrayLength; i++) {
                        var c = markers[i];
                        $(c).each(function(){
                            var cla = c;
                            var el = $(this);
                            var isItem = el.hasClass("skills-item");

                            console.log(c);

                            el.mouseover(function(){
                                el.addClass("marker-active");
                                $(cla).each(function(){
                                    var isSelectedItem = $(this).hasClass("skills-item");

                                        if(isItem && !isSelectedItem){
                                            $(this).addClass("marker-active");
                                        }//end if
                                        else if(!isItem){
                                            $(this).addClass("marker-active");
                                        }//end else
                                    })
                             });
                            el.mouseleave(function(){
                                el.removeClass("marker-active");
                                 $(cla).each(function(){
                                        var isSelectedItem = $(this).hasClass("skills-item");

                                        if(isItem && !isSelectedItem){
                                            $(this).removeClass("marker-active");
                                        }//end if
                                        else if(!isItem){
                                            $(this).removeClass("marker-active");
                                        }//end else
                                     })
                           });
                        })
                }//end for
    };

    window.onload(applyBehaviorToSkill());