function genes(){
  var DNA = "";
  var RNA = "";
  var mRNA = "";
  var genome = "";
  var char1 = "";
  var char2 = "";
  var char3 = "";
  var singleProtein = "";
  var start = "";
  var index = "";
  var protein = [];
  var findstart = 1; //findstart looks for sequence AUG then stops searching for start findstart then becomes 0.

  DNA = document.getElementById('DNAStrand').value;
  DNA = DNA.toUpperCase();

  if (/[^ATCG]/.test(DNA))
    {
      DNA = 'String can only contain ATCG';
      document.getElementById("test").innerHTML=DNA;
    }
  else
  { //transcribe DNA to RNA & translate DNA to mRNA
    for (i=0;i<DNA.length;i++)
    {
      if (DNA[i] == 'A')
      {
       RNA = RNA + 'T'; 
       mRNA = mRNA + 'U'; 
      }
      else if (DNA[i] == 'T')
      {
        RNA = RNA + 'A';
        mRNA = mRNA + 'A';
      }
      else if (DNA[i] == 'C')
      {
        RNA = RNA + 'G';
        mRNA = mRNA + 'G';
      }
      else if (DNA[i] == 'G')
      {
        RNA = RNA + 'C';
        mRNA = mRNA + 'C';
      }

      if (findstart == 1)
      {
        if (i == 2)
        {
          char1 = mRNA[0];
          char2 = mRNA[1];
          char3 = mRNA[2];
        }
        else if (i > 2)
        {
          char1 = char2;
          char2 = char3;
          char3 = mRNA[i];
        }
        start = char1 + char2 + char3;

        if (start == "AUG")
        {
          findstart = 0;
          index = i;
          indexI = index;
          protein.push(start);
        }
      }
      if (findstart == 0)
      {
        indexI++;
        if ( (((indexI) - index) > 0) && (((indexI-3) - index) % 3 == 1) )
        {
          if (singleProtein == "UAA" || singleProtein == "UAG" || singleProtein == "UGA")
          {
            
          }
          else
          {
            char1 = mRNA[i-2];
            char2 = mRNA[i-1];
            char3 = mRNA[i];
            singleProtein = char1 + char2 + char3; 
            protein.push(singleProtein);
          }
        }
      }
    }
    var genome = DNA + "- DNA" + "<br />" + RNA + "- RNA" + "<br />" + mRNA + "- mRNA" + "<br />" + protein + "- Proteins";
    document.getElementById("test").innerHTML=genome;
  }
}
