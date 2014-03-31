#!/bin/sh

folder=ls
file="./music.json"
chaine=""
first=1
for music in *
do	
	extension=$(echo $music | sed 's/\(^.*\)\(....\)$/\2/') 
	if [ "$extension" = ".ogg" ]; then
		if [ $first -eq 0 ]; then
			chaine="$chaine ,"
		fi
		if [ $first -eq 1 ]; then
			first=0
		fi
		chaine="$chaine {\"file\":\"${music}\"}"
	fi
done

cat <<EOM >$file
[
	${chaine}
]
EOM
