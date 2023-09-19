##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> LineAtPrice\n<b>Build</b> 11\n<b>Info</b> Adds line that follows current price.
##  Start  CODE  ##
## Input ##
input   barsBack = 0;    #HINT barsBack: How far you want the Line from price.  
## Start ##
def     c = if !IsNaN(close) and IsNaN(close[-1]) then close else c[1];
##
plot    PriceLine = if isNaN(close[-barsBack]) then c[-barsBack] else Double.NaN;
        PriceLine.setDefaultColor(Color.WHITE);
        PriceLine.SetStyle(Curve.FIRM);
        PriceLine.SetLineWeight(1);
        PriceLine.hideBubble();
        PriceLine.hideTitle();
## Label ##
##  END  CODE  ##