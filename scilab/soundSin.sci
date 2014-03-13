function resultat = soundSin (f,D,a,fe)
    if f == null then
        f = 400;
    end
    if D == null then
        D = 1;
    end
    if a == null then
        a = 1;
    end
    if fe == null then
        fe = 22050;
    end
    t = [0:1/fe:D];
    resultat = a*sin(2*%pi*t*f);
endfunction