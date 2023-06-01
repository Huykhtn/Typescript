import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(itemObj:ListItem):void;
    removeItem(id:string):void
}

export default class Fulllist implements List{
    static instance: Fulllist = new Fulllist()
    private constructor(private _list: ListItem[]=[]){

    }
    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storeList: string|null = localStorage.getItem("myList")
        if(typeof storeList !== 'string') return
        const  parseList : {_id: string, _item:string, _checked:boolean}[]
           = JSON.parse(storeList)
        parseList.forEach(itemObj =>{
            const newListItem = new ListItem( itemObj._id,itemObj._item,itemObj._checked)
            Fulllist.instance.addItem(newListItem)
        })
    }

    save():void {
        localStorage.setItem("myList",JSON.stringify(this._list))
    }
    clearList(): void {
        this._list=[]
        this.save
    }
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save
    }
    removeItem(id: string): void {
        this._list= this._list.filter(item=>item.id !== id)// Loc nhung phan tu co id khac voi id tren ham
        this.save()

    }


    
}