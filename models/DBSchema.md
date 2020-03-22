#####
Database Schema
#####

#############
Tables 
#############
|- Carogery
|--- id           (INTEGER)  => PK, AI, NN
|--- categoryName  (STRING)  => NN

|- Item
|--- id           (INTEGER)  => PK, AI, NN
|--- itemName     (STRING)   => NN

############
Relationship
############

'Item' is belongs to 'Catogery' => ManyToOne