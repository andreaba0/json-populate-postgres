const db = {
    users: [
        {
            email: 'test@domain.com',
            id: "id",
            "usersession": [
                {
                    hasheduuid: (id) => {},
                    status: "active",
                    ".fk": ["userid.users.id"],
                    ".row": {
                        hasheduuid: "id"
                    }
                    "sessions": []
                }
            ],
            "domains": [
                {
                    id: "id",
                    "domain": "domain.com",
                    ".fk": ["userid.users.id"]
                }
            ]
        }
    }
}