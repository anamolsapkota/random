from arithmetic import Arithmetic
import unittest

class TestArithmetic(unittest.TestCase):

    def setUp(self):
        self.arithmetic = Arithmetic()

    def testAdd(self):
        self.assertEqual(4, self.arithmetic.add(2, 2))

    def testSubtract(self):
        self.assertEqual(4, self.arithmetic.subtract(6, 2))

    def testDivide(self):
        self.assertEqual(4, self.arithmetic.divide(8, 2))

    def testMultiply(self):
        self.assertEqual(4, self.arithmetic.multiply(2, 2))

unittest.main()