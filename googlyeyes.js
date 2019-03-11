const googlyEyes = new Map([
    ['gotylogo.png',
        { eyes: [ 
            { left: 81.5, top: 197.5, size: 10 }, 
            { left: 80.5, top: 215.5, size: 11 } 
        ] } 

    ], ['goatribbon.png', 
        { eyes: [ 
            { left: 40, top: 35, size: 14 }, 
            { left: 71, top: 33, size: 12 } 
        ] } 

    ], ['chrisribbon.png', 
        { eyes: [ 
            { left: 54, top: 52, size: 10 }, 
            { left: 71, top: 48, size: 8 } 
        ] } 

    ], ['artifact3.png', 
        { eyes: [ 
            { left: 35, top: 60, size: 4 }, 
            { left: 44, top: 56, size: 7 } 
        ] } 
    
    ], ['artifact5.png', 
        { eyes: [ 
            { left: 48, top: 27, size: 6 }, 
            { left: 69, top: 29, size: 6 } 
        ] } 
    
    ], ['battletech.png', 
        { eyes: [ 
            { left: 8, top: 21, size: 26 }, 
            { left: 66, top: 21, size: 26 } 
        ] } 
    
    ], ['battletech2.png', 
        { eyes: [ 
            { left: 42, top: 18, size: 6 }, 
            { left: 53, top: 18, size: 6 } 
        ] } 
    
    ], ['battletech3.png', 
        { eyes: [ 
            { left: 42, top: 21, size: 5 }, 
            { left: 52, top: 21, size: 5 } 
        ] } 
    
    ], ['battletech5.png', 
        { eyes: [ 
            { left: 27, top: 60, size: 14 }
        ] } 
    
    ], ['celeste.png', 
        { eyes: [ 
            { left: 34, top: 66, size: 6 }, 
            { left: 50, top: 64, size: 9 } 
        ] } 
    
    ], ['celeste2.png',
        { eyes: [ 
            { left: 48, top: 43, size: 6 }, 
            { left: 60, top: 46, size: 4 } 
        ] } 

    ], ['celeste3.png',
        { eyes: [ 
            { left: 52, top: 36, size: 5 }, 
            { left: 60, top: 38, size: 5 },
            { left: 11, top: 77, size: 3 }
        ] } 

    ], ['celeste4.png',
        { eyes: [ 
            { left: 37, top: 84, size: 6 }, 
            { left: 51, top: 84, size: 6 },
            { left: 88, top: 62, size: 2 },
            { left: 15, top: 16, size: 6 }
        ] } 

    ], ['celeste5.png',
        { eyes: [ 
            { left: 33, top: 39, size: 7 }, 
            { left: 48, top: 41, size: 10 } 
        ] } 

    ], ['celeste6.png',
        { eyes: [ 
            { left: 50, top: 49, size: 11 }
        ] } 

    ], ['celeste7.png',
        { eyes: [ 
            { left: 46, top: 42, size: 6 }, 
            { left: 55, top: 46, size: 5 } 
        ] } 

    ], ['cultist.png', 
        { eyes: [ 
            { left: 32, top: 49, size: 12 }, 
            { left: 57, top: 53, size: 10 } 
        ] } 
    
    ], ['cultist2.png', 
        { eyes: [ 
            { left: 25, top: 65, size: 14 }, 
            { left: 55, top: 62, size: 18 } 
        ] } 
    
    ], ['cultist3.png', 
        { eyes: [ 
            { left: 13, top: 24, size: 7 }, 
            { left: 22, top: 18, size: 7 },
            { left: 72, top: 17, size: 6 },
            { left: 83, top: 20, size: 7 } 
        ] } 
    
    ], ['cultist4.png', 
        { eyes: [ 
            { left: 23, top: 55, size: 12 }, 
            { left: 56, top: 54, size: 12 } 
        ] } 
    
    ], ['cultist5.png', 
        { eyes: [ 
            { left: 28, top: 10, size: 40 } 
        ] } 
    
    ], ['cultist6.png', 
        { eyes: [ 
            { left: 66, top: 52, size: 7 }
        ] } 
    
    ], ['deadcells.png', 
        { eyes: [ 
            { left: 80, top: 28, size: 11 },
            { left: 6, top: 103, size: 21 }
        ] } 
    
    ], ['deadcells2.png', 
        { eyes: [ 
            { left: 49, top: 35, size: 17 }, 
            { left: 82, top: 126, size: 25 } 
        ] } 
    
    ], ['deadcells3.png', 
        { eyes: [ 
            { left: 45, top: 18, size: 14 } 
        ] } 
    
    ], ['deadfire.png', 
        { eyes: [ 
            { left: 32, top: 18, size: 25 }
        ] } 
    
    ], ['deadfire2.png', 
        { eyes: [ 
            { left: 43, top: 40, size: 9 }, 
            { left: 54, top: 40, size: 8 } 
        ] } 
    
    ], ['deadfire3.png', 
        { eyes: [ 
            { left: 31, top: 37, size: 6 }, 
            { left: 44, top: 36, size: 6 } 
        ] } 
    
    ], ['deadfire4.png', 
        { eyes: [ 
            { left: 33, top: 56, size: 36 } 
        ] } 
    
    ], ['deadfire5.png', 
        { eyes: [ 
            { left: 58, top: 22, size: 5 }, 
            { left: 64, top: 23, size: 4 } 
        ] } 
    ], ['deadfire6.png', 
        { eyes: [ 
            { left: 47, top: 14, size: 5 }, 
            { left: 40, top: 14, size: 5 } 
        ] } 
    ], ['deadfire7.png', 
        { eyes: [ 
            { left: 51, top: 18, size: 5 }, 
            { left: 57, top: 19, size: 5 } 
        ] } 
    ], ['deadfire8.png', 
        { eyes: [ 
            { left: 7, top: 18, size: 12 }, 
            { left: 59, top: 13, size: 5 } 
        ] } 
    ], ['godofwar.png', 
        { eyes: [ 
            { left: 44, top: 40, size: 15 }, 
            { left: 72, top: 42, size: 12 } 
        ] } 
    ], ['godofwar2.png', 
        { eyes: [ 
            { left: 30, top: 54, size: 9 }
        ] } 
    ], ['godofwar3.png', 
        { eyes: [ 
            { left: 48, top: 10, size: 6 }, 
            { left: 56, top: 11, size: 6 } 
        ] } 
    ], ['godofwar4.png', 
        { eyes: [ 
            { left: 16, top: 17, size: 6 }, 
            { left: 24, top: 17, size: 6 },
            { left: 68, top: 32, size: 7 } 
        ] } 
    ], ['godofwar5.png', 
        { eyes: [ 
            { left: 61, top: 34, size: 5 }, 
            { left: 49, top: 35, size: 4 } 
        ] } 
    ], ['hitman.png', 
        { eyes: [ 
            { left: 42, top: 16, size: 6 }, 
            { left: 52, top: 17, size: 6 } 
        ] } 
    
    ], ['hitman2.png', 
        { eyes: [ 
            { left: 16, top: 53, size: 8 }, 
            { left: 30, top: 46, size: 11 } 
        ] } 
    
    ], ['hitman3.png', 
        { eyes: [ 
            { left: 45, top: 13, size: 5 }, 
            { left: 53, top: 13, size: 5 } 
        ] } 
    
    ], ['hitman4.png', 
        { eyes: [ 
            { left: 34, top: 39, size: 9 }, 
            { left: 47, top: 39, size: 10 } 
        ] } 
    
    ], ['intothebreach.png', 
        { eyes: [ 
            { left: 50, top: 19, size: 8 }, 
            { left: 61, top: 19, size: 8 } 
        ] } 
    
    ], ['intothebreach2.png', 
        { eyes: [ 
            { left: 44, top: 31, size: 5 }, 
            { left: 51, top: 31, size: 5 } 
        ] } 
    
    ], ['intothebreach4.png', 
        { eyes: [ 
            { left: 51, top: 71, size: 6 } 
        ] } 
    
    ], ['intothebreach5.png', 
        { eyes: [ 
            { left: 45, top: 59, size: 10 } 
        ] } 
    
    ], ['intothebreach6.png', 
        { eyes: [ 
            { left: 43, top: 30, size: 13 } 
        ] } 
    
    ], ['monhunto.png', 
        { eyes: [ 
            { left: 58, top: 17, size: 7 }, 
            { left: 37, top: 18, size: 6 } 
        ] } 
    
    ], ['monhunto2.png', 
        { eyes: [ 
            { left: 24, top: 30, size: 18 }, 
            { left: 59, top: 41, size: 20 } 
        ] } 
    
    ], ['monhunto3.png', 
        { eyes: [ 
            { left: 40, top: 66, size: 15 } 
        ] } 
    
    ], ['monhunto4.png', 
        { eyes: [ 
            { left: 51, top: 66, size: 12 } 
        ] } 
    
    ], ['monhunto5.png', 
        { eyes: [ 
            { left: 31, top: 27, size: 11 } 
        ] } 
    
    ], ['monhunto6.png', 
        { eyes: [ 
            { left: 44, top: 38, size: 10 } 
        ] } 
    
    ], ['obradinn.png', 
        { eyes: [ 
            { left: 33, top: 60, size: 37 }
        ] } 
    
    ], ['obradinn2.png', 
        { eyes: [ 
            { left: 50, top: 31, size: 8 }, 
            { left: 59, top: 27, size: 7 } 
        ] } 
    
    ], ['odyssey.png', 
        { eyes: [ 
            { left: 41, top: 27, size: 9 }, 
            { left: 53, top: 28, size: 9 } 
        ] } 
    
    ], ['odyssey2.png', 
        { eyes: [ 
            { left: 27, top: 35, size: 6 }, 
            { left: 34, top: 35, size: 6 } 
        ] } 
    
    ], ['odyssey3.png', 
        { eyes: [ 
            { left: 32, top: 35, size: 8 }, 
            { left: 23, top: 36, size: 8 } 
        ] } 
    
    ], ['odyssey4.png', 
        { eyes: [ 
            { left: 68, top: 83, size: 5 }, 
            { left: 74, top: 85, size: 4 } 
        ] } 
    
    ], ['odyssey5.png', 
        { eyes: [ 
            { left: 15, top: 64, size: 12 },
            { left: 38, top: 62, size: 14 }
        ] } 
    
    ], ['odyssey6.png', 
        { eyes: [ 
            { left: 68, top: 4, size: 10 } 
        ] } 
    
    ], ['odyssey7.png', 
        { eyes: [ 
            { left: 21, top: 24, size: 6 }, 
            { left: 31, top: 23, size: 7 } 
        ] } 
    
    ], ['odyssey8.png', 
        { eyes: [ 
            { left: 55, top: 53, size: 11 }, 
            { left: 69, top: 53, size: 11 } 
        ] } 
    
    ], ['prey.png', 
        { eyes: [ 
            { left: 44, top: 49, size: 12 } 
        ] } 
    
    ], ['prey2.png', 
        { eyes: [ 
            { left: 37, top: 39, size: 11 }, 
            { left: 56, top: 38, size: 11 } 
        ] } 
    
    ], ['prey3.png', 
        { eyes: [ 
            { left: 20, top: 38, size: 14 }, 
            { left: 55, top: 41, size: 12 } 
        ] } 
    
    ], ['prey4.png', 
        { eyes: [ 
            { left: 29, top: 40, size: 10 }, 
            { left: 44, top: 43, size: 11 } 
        ] } 
    
    ], ['prey5.png', 
        { eyes: [ 
            { left: 32, top: 46, size: 10 }, 
            { left: 48, top: 40, size: 12 } 
        ] } 
    
    ], ['prey6.png', 
        { eyes: [ 
            { left: 39, top: 6, size: 16 } 
        ] } 
    
    ], ['spiderman.png', 
        { eyes: [ 
            { left: 30, top: 13, size: 23}, 
            { left: 56, top: 18, size: 22 } 
        ] } 
    
    ], ['spiderman2.png', 
        { eyes: [ 
            { left: 40, top: 124, size: 8 }, 
            { left: 50, top: 124, size: 10 } 
        ] } 
    
    ], ['spiderman3.png', 
        { eyes: [ 
            { left: 45, top: 43, size: 4 },
            { left: 49, top: 43, size: 4 },
            { left: 53, top: 43, size: 4 },
            { left: 45, top: 47, size: 4 },
            { left: 49, top: 47, size: 4 },
            { left: 53, top: 47, size: 4 }
        ] } 
    
    ], ['spiderman4.png', 
        { eyes: [ 
            { left: 48, top: 21, size: 9 }, 
            { left: 61, top: 22, size: 9 } 
        ] } 
    
    ], ['spiderpan', 
        { eyes: [ 
            { left: 236, top: 30, size: 19 }, 
            { left: 256, top: 25, size: 22 } 
        ] } 
    
    ], ['spire.png', 
        { eyes: [ 
            { left: 38, top: 53, size: 19 }, 
            { left: 68, top: 53, size: 12 } 
        ] } 
    
    ], ['spire3.png', 
        { eyes: [ 
            { left: 40, top: 51, size: 19 }, 
            { left: 75, top: 51, size: 19 } 
        ] } 
    
    ], ['spire4.png', 
        { eyes: [ 
            { left: 17, top: 25, size: 10 } 
        ] } 
    
    ], ['spire5.png', 
        { eyes: [ 
            { left: 56, top: 33, size: 16 }, 
            { left: 56, top: 49, size: 22 },
            { left: 22, top: 11, size: 14 }, 
            { left: 65, top: 5, size: 11 }, 
            { left: 89, top: 13, size: 6 },
            { left: 11, top: 60, size: 14 }
        ] } 
    
    ], ['subnautica.png', 
        { eyes: [ 
            { left: 36, top: 80, size: 18 }, 
            { left: 79, top: 80, size: 12 } 
        ] } 
    
    ], ['subnautica2.png', 
        { eyes: [ 
            { left: 41, top: 58, size: 24 } 
        ] } 
    
    ], ['subnautica3.png', 
        { eyes: [ 
            { left: 53, top: 31, size: 24 } 
        ] } 
    
    ], ['subnautica4.png', 
        { eyes: [ 
            { left: 27, top: 14, size: 12 }, 
            { left: 54, top: 18, size: 12 } 
        ] } 
    
    ], ['subnautica5.png', 
        { eyes: [ 
            { left: 59, top: 22, size: 6 }, 
            { left: 75, top: 71, size: 7 } 
        ] } 
    
    ], ['subnautica7.png', 
        { eyes: [ 
            { left: 56, top: 19, size: 9 }, 
            { left: 80, top: 16, size: 5 } 
        ] } 
    
    ], ['subnautica9.png', 
        { eyes: [ 
            { left: 54, top: 26, size: 16 }, 
            { left: 74, top: 26, size: 16 } 
        ] } 
    
    ], ['subnautica10.png', 
        { eyes: [ 
            { left: 31, top: 10, size: 6 },
            { left: 37, top: 7, size: 6 }
/*            { left: 33, top: 8, size: 9 }*/
        ] } 
    
    ], ['vermintide.png', 
        { eyes: [ 
            { left: 50, top: 16, size: 9 }, 
            { left: 60, top: 22, size: 7 } 
        ] } 
    
    ], ['vermintide2.png', 
        { eyes: [ 
            { left: 32, top: 39, size: 5 }, 
            { left: 37, top: 40, size: 6 } 
        ] } 
    
    ], ['vermintide3.png', 
        { eyes: [ 
            { left: 43, top: 25, size: 7 }, 
            { left: 54, top: 26, size: 7 } 
        ] } 
    
    ], ['vermintide4.png', 
        { eyes: [ 
            { left: 48, top: 15, size: 6 }, 
            { left: 56, top: 18, size: 5 } 
        ] } 
    
    ], ['vermintide5.png', 
        { eyes: [ 
            { left: 52, top: 17, size: 4 }, 
            { left: 56, top: 18, size: 4 } 
        ] } 
    
    ], ['vermintide6.png', 
        { eyes: [ 
            { left: 35, top: 66, size: 10 }, 
            { left: 49, top: 66, size: 10 } 
        ] } 
    
    ], ['warframe.png', 
        { eyes: [ 
            { left: 37, top: 53, size: 24 }
        ] } 
    
    ], ['warframe2.png', 
        { eyes: [ 
            { left: 45, top: 23, size: 6 }, 
            { left: 52, top: 27, size: 5 } 
        ] } 
    
    ], ['warframe3.png', 
        { eyes: [ 
            { left: 41, top: 30, size: 9 }, 
            { left: 54, top: 29, size: 9 } 
        ] } 
    
    ], ['warframe4.png', 
        { eyes: [ 
            { left: 32, top: 39, size: 10 }, 
            { left: 50, top: 39, size: 10 } 
        ] } 
    
    ], ['warframe5.png', 
        { eyes: [ 
            { left: 46, top: 57, size: 6 }, 
            { left: 51, top: 56, size: 6 } 
        ] } 
    
    ], ['yakuza0.png', 
        { eyes: [ 
            { left: 67, top: 24, size: 5 }, 
            { left: 78, top: 29, size: 5 } 
        ] } 
    
    ], ['yakuza1.png', 
        { eyes: [ 
            { left: 27, top: 25, size: 5 }
        ] } 
    
    ], ['chris.png', 
        { eyes: [ 
            { left: 39, top: 66, size: 21 }, 
            { left: 77, top: 71, size: 15 } 
        ] } 
    
    ], ['chris2.png', 
        { eyes: [ 
            { left: 47, top: 58, size: 11 }, 
            { left: 80, top: 60, size: 10 } 
        ] } 
    
    ], ['chris3.png', 
        { eyes: [ 
            { left: 39, top: 45, size: 7 }, 
            { left: 51, top: 46, size: 6 } 
        ] } 
    
    ], ['chris4.png', 
        { eyes: [ 
            { left: 29, top: 44, size: 9 }, 
            { left: 48, top: 42, size: 10 } 
        ] } 
    
    ], ['chris5.png', 
        { eyes: [ 
            { left: 23, top: 37, size: 8 }, 
            { left: 39, top: 36, size: 10 } 
        ] } 
    
    ], ['chris6.png', 
        { eyes: [ 
            { left: 34, top: 46, size: 14 }, 
            { left: 61, top: 39, size: 15 } 
        ] } 
    
    ], ['chris7.png', 
        { eyes: [ 
            { left: 44, top: 51, size: 12 }, 
            { left: 66, top: 57, size: 10 } 
        ] } 
    
    ], ['chris8.png', 
        { eyes: [ 
            { left: 32, top: 57, size: 9 }, 
            { left: 54, top: 57, size: 8 },
            { left: 49, top: 89, size: 7 }, 
            { left: 51, top: 104, size: 8 }
        ] } 
    
    ], ['chris9.png', 
        { eyes: [ 
            { left: 40, top: 66, size: 7 }, 
            { left: 64, top: 69, size: 7 } 
        ] } 
    
    ], ['chris10.png', 
        { eyes: [ 
            { left: 31, top: 56, size: 11 }
        ] } 
    
    ], ['chris11.png', 
        { eyes: [ 
            { left: 7, top: 51, size: 28 }, 
            { left: 69, top: 38, size: 26 } 
        ] } 
    
    ], ['chris12.png', 
        { eyes: [ 
            { left: 41, top: 12, size: 5 }, 
            { left: 50, top: 12, size: 5 } 
        ] } 
    
    ], ['chris13.png', 
        { eyes: [ 
            { left: 42, top: 45, size: 13 }, 
            { left: 66, top: 48, size: 10 } 
        ] } 
    
    ], ['chris14.png', 
        { eyes: [ 
            { left: 25, top: 48, size: 8 }, 
            { left: 42, top: 41, size: 10 } 
        ] } 
    
    ], ['chris15.png', 
        { eyes: [ 
            { left: 37, top: 18, size: 5 }, 
            { left: 46, top: 20, size: 5 },
            { left: -3, top: 34, size: 9 } 
        ] } 
    
    ], ['chris16.png', 
        { eyes: [ 
            { left: 40, top: 18, size: 7 }, 
            { left: 51.5, top: 18.5, size: 5 } 
        ] } 
    
    ], ['chris17.png', 
        { eyes: [ 
            { left: 31, top: 62, size: 19 }, 
            { left: 63, top: 60, size: 15 } 
        ] } 
    
    ], ['chris18.png', 
        { eyes: [ 
            { left: 42, top: 62, size: 10 } 
        ] } 
    
    ], ['chris19.png', 
        { eyes: [ 
            { left: 32, top: 39, size: 5 }, 
            { left: 42, top: 36, size: 5 } 
        ] } 
    
    ], ['chris20.png', 
        { eyes: [ 
            { left: 12, top: 38, size: 17 }, 
            { left: 56, top: 33, size: 19 } 
        ] } 
    
    ], ['chris21.png', 
        { eyes: [ 
            { left: 31, top: 30, size: 7 }, 
            { left: 44, top: 29, size: 8 } 
        ] } 
    
    ], ['chris22.png', 
        { eyes: [ 
            { left: 47, top: 20, size: 6 }, 
            { left: 58, top: 24, size: 6 } 
        ] } 
    
    ], ['chris23.png', 
        { eyes: [ 
            { left: 42, top: 15, size: 6 }, 
            { left: 51, top: 15, size: 6 } 
        ] } 
    
    ], ['chris24.png', 
        { eyes: [ 
            { left: 45, top: 57, size: 18, addclass: 'mirroreye' }, 
            { left: 77, top: 60, size: 14 } 
        ] } 
    
    ], ['chris25.png', 
        { eyes: [ 
            { left: 39, top: 37, size: 9 }
        ] } 
    
    ], ['chris26.png', 
        { eyes: [ 
            { left: 36, top: 44, size: 11 }, 
            { left: 59, top: 45, size: 13 } 
        ] } 
    
    ], ['chris27.png', 
        { eyes: [ 
            { left: 45, top: 32, size: 5 }, 
            { left: 57, top: 32, size: 5 } 
        ] } 
    
    ], ['chris28.png', 
        { eyes: [ 
            { left: 25, top: 63, size: 16 }, 
            { left: 55, top: 64, size: 16 } 
        ] } 
    
    ], ['chris29.png', 
        { eyes: [ 
            { left: 28, top: 65, size: 13 }, 
            { left: 60, top: 67, size: 13 } 
        ] } 
    
    ], ['chris30.png', 
        { eyes: [ 
            { left: 28, top: 53, size: 13 }, 
            { left: 56, top: 58, size: 13 } 
        ] } 
    
    ], ['chris31.png', 
        { eyes: [ 
            { left: 16, top: 73, size: 11 }, 
            { left: 46, top: 72, size: 13 } 
        ] } 
    
    ], ['chris32.png', 
        { eyes: [ 
            { left: 37, top: 64, size: 12, addclass: 'shadeseye' }, 
            { left: 67, top: 64, size: 12, addclass: 'shadeseye' } 
        ] } 
    
    ], ['chris33.png', 
        { eyes: [ 
            { left: 17, top: 35, size: 9, addclass: 'chisseye' }, 
            { left: 40, top: 34, size: 10, addclass: 'chisseye' } 
        ] } 
    
    ], ['chris34.png', 
        { eyes: [ 
            { left: 44, top: 34, size: 11, addclass: 'redeye' }, 
            { left: 68, top: 34, size: 11, addclass: 'redeye' } 
        ] } 
    
    ], ['chris35.png', 
        { eyes: [ 
            { left: 72, top: 26, size: 8 }, 
            { left: 82, top: 25, size: 6 } 
        ] } 
    
    ], ['chris36.png', 
        { eyes: [ 
            { left: 29, top: 24, size: 17 }, 
            { left: 50, top: 18, size: 17 } 
        ] } 
    
    ]
    /*, ['.png', 
        { eyes: [ 
            { left: , top: , size: 6 }, 
            { left: , top: , size: 6 } 
        ] } 
    
    ]*/
]);

function getGoogly(elem) {
    const src = elem && (elem.dataset.googly || elem.src || elem.dataset.src);
    if(src) {
        const key = src.substring(src.lastIndexOf('/') + 1);
        return googlyEyes.get(key);
    } else {
        return undefined;
    }
}