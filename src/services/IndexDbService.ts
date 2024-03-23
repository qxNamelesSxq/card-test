export class IndexDbUtils {

    static async getDBConnection(
      dbName: string,
      storeName: string,
    ): Promise<IDBDatabase> {
      return await this.openDB(dbName, storeName)
    }
  
    static async openDB(
      dbName: string,
      storeName: string,
    ): Promise<IDBDatabase> {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1)
  
        request.onupgradeneeded = function (event: IDBVersionChangeEvent) {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: 'id' })
          }
        }
  
        request.onsuccess = function (event) {
          const db = (event.target as IDBOpenDBRequest).result
          resolve(db)
        }
  
        request.onerror = function (event) {
          console.log('onerror DB')
          reject((event.target as IDBOpenDBRequest).error)
        }
      })
    }

    static async createUpdateEntry<T>(
      db: IDBDatabase,
      storeName: string,
      entry: T,
    ): Promise<T> {
      if (!db) {
        throw new Error('Database connection is not established')
      }
      
  
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite')
        const store = transaction.objectStore(storeName)
  
        const request = store.put(entry)
  
        request.onsuccess = () => {
          resolve(entry)
        }
  
        request.onerror = function (event: Event) {
          reject((event.target as IDBRequest).error)
        }
      })
    }


    static async deleteEntry(
      db: IDBDatabase,
      storeName: string,
      entryId: string,
    ): Promise<void> {
      if (!db) {
        throw new Error('Database connection is not established')
      }
      return new Promise((resolve, reject) => {
        const transaction = db!.transaction([storeName], 'readwrite')
        const store = transaction.objectStore(storeName)
        const request = store.delete(entryId)
  
        request.onsuccess = () => {
          resolve()
        }
  
        request.onerror = (event) => {
          reject(new Error('Error deleting entry:' + request.error))
        }
      })
    }


    static async getAllFromStore<T>(
      db: IDBDatabase,
      storeName: string,
    ): Promise<T[] | undefined> {
      if (!db) {
        throw new Error('Database connection is not established')
      }
      return new Promise((resolve, reject) => {
        const transaction = db!.transaction(storeName, 'readonly')
        const store = transaction.objectStore(storeName)
        const request = store.getAll()
  
        request.onsuccess = function (event: Event) {
          const data = (event.target as IDBRequest).result as T[]
          resolve(data)
        }
  
        request.onerror = function (event: Event) {
          reject(
            new Error(
              `Error getting data from ${storeName}:` +
                (event.target as IDBRequest).error,
            ),
          )
        }
      })
    }
    
  }
  