#!/bin/sh

folder=ls
file="./music.json"
chaine=""
first=1
for i in *
do
	
	echo "${i: -1}"
	extension=echo "test" | tail -c 5
	
	if [ "$extension" = ".ogg" ]; then
		if [ $first -eq 1 ]; then
			chaine="$chaine ,"
		fi
		chaine="$chaine {\"file\":\"${i}\"}"
	fi
done

cat <<EOM >$file
{
	[
		${chaine}
	]
}
EOM
