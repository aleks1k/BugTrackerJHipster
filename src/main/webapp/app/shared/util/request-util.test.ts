import * as request_util from "./request-util"
// @ponicode
describe("request_util.createRequestOption", () => {
    test("0", () => {
        let callFunction: any = () => {
            request_util.createRequestOption(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
