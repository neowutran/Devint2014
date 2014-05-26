#!/bin/sh

list_music(){
    for music in *
    do
        if [ -d "$music" ]; then
            cd "$music"
            list_music ${music}"/"
            cd ".."
	else
        
	    extension=$(echo $music | sed 's/\(^.*\)\(....\)$/\2/')
	    if [ "$extension" = ".ogg"] || [ "$extension" = ".mp3" ]; then
		    if [ $first -eq 0 ]; then
		    	chaine="$chaine ,"
		    fi
		    if [ $first -eq 1 ]; then
			    first=0
		    fi
		    chaine="$chaine {\"file\":\"${1}${music}\"}"
	    fi
	fi
    done
}

file="./music.js"
chaine=""
first=1

list_music ""

cat <<EOM >$file
var music_list = [
	${chaine}
];
EOM
