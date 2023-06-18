import LinkListCollection from './Collection/LinkListCollection';
import NumberCollection from './Collection/NumberCollection';
import Sorter from './Sorter';
import { LinkList } from './Structure/LinkList';

let NewLinkList = new LinkList();
NewLinkList.insertAtEnd(12)
NewLinkList.insertAtEnd(11)
NewLinkList.insertAtEnd(10)
NewLinkList.insertAtStart(13)
NewLinkList.insertAtStart(14)
NewLinkList.insertAtStart(-1)
let newCollection = new LinkListCollection(NewLinkList)
let sorterClass = new Sorter(newCollection);
sorterClass.sort();
newCollection.display();
