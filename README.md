# ReactJS Context-API örneği (Ördek - Çirkin Ördek)

ReactJS'te Çoklu Context API kullanımına örnek olması için basit bir örnek hazırlamak istedim.
İsimlendirmeleri Türkçe yaptım ki bu sayede yeni başlayanlar için yerleşik kodlardan ayırt etmek kolay olsun.

Örnekte iki adet context (bağlam) kullanarak farklı alanlarda birbirlerini etkilemeyen events (olaylar) oluşturdum.

Büyük bir projede herşeyi tek bir context'e bağlamak performans sorunları yaratır. Çok fazla ayırmak da bağlamların yönetimini zorlaştırabilir. Bu yüzden context ve component children arasında denge kurmak önemli. 

Projeyi başlangıçta hiçbir context oluşturmadan başlatın ancak componentleri App'e kadar ayırabildiğiniz kadar ayırın. Unutmayın, ilerleyen zamanlarda App üzerinde context yönetimini gerçekleştireceksiniz. Prop drilling yöntemiyle componentler arasında verileri aktarın. Ancak erişimler çok kompleks ise yani prop drilling uygulamak zor ise bu alana context-api uygulamak doğru bir seçim olabilir.

## Kurulum

```bash
git clone https://github.com/ugurakcil/turkish-reactjs-context-api-example.git

npm install

yarn start
```

## Geliştirici Bilgileri

Uğur AKÇIL /  [GitHub P.](https://github.com/ugurakcil)

DM'den yürümek için / [Twitter](https://twitter.com/ugurxa)
