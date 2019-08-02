var level1 = [1, 2, 3, 4, 5, 6];
var level2 = [];
var level3 = [];
var level4 = [];
var level5 = [];
var level6 = ["G major scale", "E major scale", "B major scale", "D♭ major scale", "G minor scale harmonic", "G minor scale melodic", "E minor scale harmonic", "E minor scale melodic", "B minor scale harmonic", "B minor scale melodic", "C♯ minor scale harmonic", "C♯ minor scale melodic", "E major formula pattern", "E minor formula pattern", "Chromatic scale starting on E", "Chromatic scale starting on D♭", "G major triad broken", "G major triad solid", "E major triad broken", "E major triad solid", "B major triad broken", "B major triad solid", "D♭ major triad broken", "D♭ major triad solid", "G minor triad broken", "G minor triad solid", "E minor triad broken", "E minor triad solid", "B minor triad broken", "B minor triad solid", "C♯ minor triad broken", "C♯ minor triad solid", "G major dominant 7th chord broken RH", "G major dominant 7th chord broken LH", "G major dominant 7th chord solid RH", "G major dominant 7th chord solid LH", "E major dominant 7th chord broken RH", "E major dominant 7th chord broken LH", "E major dominant 7th chord solid RH", "E major dominant 7th chord solid LH", "B major dominant 7th chord broken RH", "B major dominant 7th chord broken LH", "B major dominant 7th chord solid RH", "B major dominant 7th chord solid LH", "D♭ major dominant 7th chord broken RH", "D♭ major dominant 7th chord broken LH", "D♭ major dominant 7th chord solid RH", "D♭ major dominant 7th chord solid LH", "G minor leading-tone diminished 7th chord broken RH", "G minor leading-tone diminished 7th chord broken LH", "G minor leading-tone diminished 7th chord solid RH", "G minor leading-tone diminished 7th chord solid LH", "E minor leading-tone diminished 7th chord broken RH", "E minor leading-tone diminished 7th chord broken LH", "E minor leading-tone diminished 7th chord solid RH", "E minor leading-tone diminished 7th chord solid LH", "B minor leading-tone diminished 7th chord broken RH", "B minor leading-tone diminished 7th chord broken LH", "B minor leading-tone diminished 7th chord solid RH", "B minor leading-tone diminished 7th chord solid LH", "C♯ minor leading-tone diminished 7th chord broken RH", "C♯ minor leading-tone diminished 7th chord broken LH", "C♯ minor leading-tone diminished 7th chord solid RH", "C♯ minor leading-tone diminished 7th chord solid LH", "G major tonic arpeggio RH", "G major tonic arpeggio LH", "E major tonic arpeggio RH", "E major tonic arpeggio LH", "B major tonic arpeggio RH", "B major tonic arpeggio LH", "D♭ major tonic arpeggio RH", "D♭ major tonic arpeggio LH", "G minor tonic arpeggio RH", "G minor tonic arpeggio LH", "E minor tonic arpeggio RH", "E minor tonic arpeggio LH", "B minor tonic arpeggio RH", "B minor tonic arpeggio LH", "C♯ minor tonic arpeggio RH", "C♯ minor tonic arpeggio LH", "G major dominant 7th arpeggio RH", "G major dominant 7th arpeggio LH", "E major dominant 7th arpeggio RH", "E major dominant 7th arpeggio LH", "B major dominant 7th arpeggio RH", "B major dominant 7th arpeggio LH", "D♭ major dominant 7th arpeggio RH", "D♭ major dominant 7th arpeggio LH", "G minor leading-tone diminished 7th arpeggio RH", "G minor leading-tone diminished 7th arpeggio LH", "E minor leading-tone diminished 7th arpeggio RH", "E minor leading-tone diminished 7th arpeggio LH", "B minor leading-tone diminished 7th arpeggio RH", "B minor leading-tone diminished 7th arpeggio LH", "C♯ minor leading-tone diminished 7th arpeggio RH", "C♯ minor leading-tone diminished 7th arpeggio LH"];
var level7 = [];
var level8 = ["C major scale", "D major scale", "E major scale", "B♭ major scale", "E♭ major scale", "G♭ major scale", "C minor scale harmonic", "C minor scale melodic", "D minor scale harmonic", "D minor scale melodic", "E minor scale harmonic", "E minor scale melodic", "B♭ minor scale harmonic", "B♭ minor scale melodic", "E♭ minor scale harmonic", "E♭ minor scale melodic", "F♯ minor scale harmonic", "F♯ minor scale melodic", "E♭ major formula pattern", "E♭ minor formula pattern", "Chromatic scale starting on E♭", "Chromatic scale starting on E", "C major four-note chord", "D major four-note chord", "E major four-note chord", "B♭ major four-note chord", "E♭ major four-note chord", "G♭ major four-note chord", "C minor four-note chord", "D minor four-note chord", "E minor four-note chord", "B♭ minor four-note chord", "E♭ minor four-note chord", "F♯ minor four-note chord", "C major dominant 7th chord broken", "C major dominant 7th chord solid", "D major dominant 7th chord broken", "D major dominant 7th chord solid", "E major dominant 7th chord broken", "E major dominant 7th chord solid", "B♭ major dominant 7th chord broken", "B♭ major dominant 7th chord solid", "E♭ major dominant 7th chord broken", "E♭ major dominant 7th chord solid", "G♭ major dominant 7th chord broken", "G♭ major dominant 7th chord solid", "C minor leading-tone diminished 7th chord broken", "C minor leading-tone diminished 7th chord solid", "D minor leading-tone diminished 7th chord broken", "D minor leading-tone diminished 7th chord solid", "E minor leading-tone diminished 7th chord broken", "E minor leading-tone diminished 7th chord solid", "B♭ minor leading-tone diminished 7th chord broken", "B♭ minor leading-tone diminished 7th chord solid", "E♭ minor leading-tone diminished 7th chord broken", "E♭ minor leading-tone diminished 7th chord solid", "F♯ minor leading-tone diminished 7th chord broken", "F♯ minor leading-tone diminished 7th chord solid", "C major tonic arpeggio", "D major tonic arpeggio", "E major tonic arpeggio", "B♭ major tonic arpeggio", "E♭ major tonic arpeggio", "G♭ major tonic arpeggio", "C minor tonic arpeggio", "D minor tonic arpeggio", "E minor tonic arpeggio", "B♭ minor tonic arpeggio", "E♭ minor tonic arpeggio", "F♯ minor tonic arpeggio", "C major dominant 7th arpeggio", "D major dominant 7th arpeggio", "E major dominant 7th arpeggio", "B♭ major dominant 7th arpeggio", "E♭ major dominant 7th arpeggio", "G♭ major dominant 7th arpeggio", "C minor leading-tone diminished 7th arpeggio", "D minor leading-tone diminished 7th arpeggio", "E minor leading-tone diminished 7th arpeggio", "B♭ minor leading-tone diminished 7th arpeggio", "E♭ minor leading-tone diminished 7th arpeggio", "F♯ minor leading-tone diminished 7th arpeggio"];
var level9 = [];
var level10 = [];
var listChosen;
var listItems = [];
var listItemsRandom = [];

$(document).ready(function() {
    $(".p-panel-2").hide();
    
    $(".p-pm-start-btn").on("click", function() {
        event.preventDefault();
        $(".p-panel-1").hide();
        $(".p-panel-2").show();
        
        listChosen = $(".form-control").val();
        
        switch (listChosen) {
            case "Level 1":
                listItems = level1.slice();
                break;
            case "Level 2":
                listItems = level2.slice();
                break;
            case "Level 3":
                listItems = level3.slice();
                break;
            case "Level 4":
                listItems = level4.slice();
                break;
            case "Level 5":
                listItems = level5.slice();
                break;
            case "Level 6":
                listItems = level6.slice();
                break;
            case "Level 7":
                listItems = level7.slice();
                break;
            case "Level 8":
                listItems = level8.slice();
                break;
            case "Level 9":
                listItems = level9.slice();
                break;
            case "Level 10":
                listItems = level10.slice();
        }
        
        // Test
        $(".p-list-display-btn").on("click", function() {
            $(this).attr("data-content", "test");
        });
        
        //
        
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        
        listItemsRandom = shuffleArray(listItems).slice();
        
        $(".p-item-display").text(listItemsRandom[0]);
        
        var l = listItems.length;
        
        $(".p-complete").text("0/" + l + " completed");
        
        var n = 0;
        
        $(".p-next-btn").on("click", function() {
            if (n + 1 < l) {
                n++;
                $(".p-item-display").text(listItemsRandom[n]);
                $(".p-complete").text(n + "/" + l + " completed");
            } else if (n + 1 === l) {
                $(".p-item-display").text("That's it!");
                $(".p-complete").text(l + "/" + l + " completed");
            }
        });
    });
});