var array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
var mf = 1
var m = 0
var item 
for (var i=0; i<array.length; i++)
{
    for (var j=i; j<array.length; j++)
    {
        if (array[i] == array[j])
            m++;
        if (mf < m)
        {
            mf = m;
            item = array[i];
        }
    }
    m = 0;
}
document.write(item+ " ( " + mf + " times ) ");