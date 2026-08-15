class Solution {
public:
    int divide(int dividend, int divisor) {
        if (dividend == divisor) return 1;
        if (dividend == INT_MIN && divisor == -1) return INT_MAX;
        if (dividend == INT_MIN && divisor == 1) return INT_MIN;

        bool isNegative = (dividend < 0) ^ (divisor < 0);

        long long n = abs((long long)dividend);
        long long d = abs((long long)divisor);
        long long ans = 0;

        while (n >= d) {
            long long temp = d;
            long long multiple = 1;
            while (n >= (temp << 1)) {
                temp <<= 1;
                multiple <<= 1;
            }
            n -= temp;
            ans += multiple;
        }

        if (ans > INT_MAX) {
            return isNegative ? INT_MIN : INT_MAX;
        }

        return isNegative ? -ans : ans;
    }
};