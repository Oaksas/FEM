import { describe } from "node:test";
import * as user from "../user";
describe('user hander', () => {
    it('should create a new user', async () => {
        const req = {
            body: { username: 'test', password: 'test' }
        }

        const res = {
            json({ token }) {
                expect(token).toBeTruthy()
            }
        }

        await user.createUser(req, res, () => { })

    })
})