"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkListCollection_1 = __importDefault(require("./Collection/LinkListCollection"));
const Sorter_1 = __importDefault(require("./Sorter"));
const LinkList_1 = require("./Structure/LinkList");
let NewLinkList = new LinkList_1.LinkList();
NewLinkList.insertAtEnd(12);
NewLinkList.insertAtEnd(11);
NewLinkList.insertAtEnd(10);
NewLinkList.insertAtStart(13);
NewLinkList.insertAtStart(14);
NewLinkList.insertAtStart(-1);
let newCollection = new LinkListCollection_1.default(NewLinkList);
let sorterClass = new Sorter_1.default(newCollection);
sorterClass.sort();
newCollection.display();
