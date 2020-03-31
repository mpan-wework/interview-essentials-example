type WhereClause = {
  uuid?: string;
};

class Account {
  static async find(id: number) {
    return {
      id,
      name: 'Hello World',
    };
  }
  static async where(whereClause: WhereClause) {
    return [{
      id: 1,
      name: `Hello ${whereClause.uuid}`,
    }];
  }
}

export default Account;
